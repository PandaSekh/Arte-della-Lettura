import Book from "@interfaces/Book";
import Post from "@interfaces/Post";
import { promises as fs } from 'fs';
import PostsDataSingleton from "@fetchers/postsData";
/**
 * Split a string into single words
 * @param phrase string to be splitted
 * @returns Array<string> of words
 */
function getKeywords(phrase: string): Array<string> {
  return phrase.split(/\b(\w+)\b/g).filter((word) => word.trim().length > 0);
}

function getMapData(): Map<string, PostWithFullData> {
  const map: Map<string, PostWithFullData> = new Map();
  const books: Array<Book> = PostsDataSingleton.getInstance().getBooks();
  const posts: Array<Post> = PostsDataSingleton.getInstance().getPosts();

  books.forEach((book: Book) => {
    // get the review (post)
    const bookReview = posts.find((post) => post.data.slug === book.reviewSlug);
    // delete the review from the array of posts
    if (bookReview) posts.splice(posts.indexOf(bookReview), 1);
    const fullData: PostWithFullData = {
      title: bookReview?.data?.title ? bookReview?.data?.title : book.title,
      image: bookReview?.data?.image
        ? `/static/images/books/${bookReview?.data?.image}`
        : `/static/images/books/${bookReview?.data?.image}`,
      slug: bookReview?.data?.slug ? bookReview?.data?.slug : book.reviewSlug,
      keywords: getKeywords(book.title),
      category: "Recensione",
      type: bookReview?.data?.type ? bookReview?.data?.type : "Libro",
      author: book.author,
      genres: book.genres,
      publishedYear: book.publishedYear,
      ogPublishedYear: book.ogPublishedYear,
      format: book.format,
      publisher: book.publisher,
      rating: book.rating,
      series: book.series,
    };
    map.set(book.reviewSlug, fullData);
  });

  posts.forEach((post) =>
    map.set(post.data.slug, {
      title: post.data.title,
      image: `/static/images/${post.data.image}`,
      slug: post.data.slug,
      keywords: getKeywords(post.data.title),
      category: post.data.category,
      type: post.data.type ? post.data.type : undefined,
    })
  );

  return map;
}

function calculateRelationshipPoints(
  postOne?: PostWithFullData,
  postTwo?: PostWithFullData
): number {
  // one of them is invalid
  if (!postOne || !postTwo) return 0;

  let points = 0;

  postOne.keywords.forEach((keyword) => {
    if (postTwo.keywords.includes(keyword)) {
      points += 2;
    }
  });
  if (postOne.author && postTwo.author) {
    postOne.author.forEach((authorOne) => {
      if (postTwo.author?.includes(authorOne)) {
        points += 3;
      }
    });
  }
  if (postOne.genres && postTwo.genres) {
    postOne.genres.forEach((genre) => {
      if (postTwo.genres?.includes(genre)) {
        points += 2;
      }
    });
  }
  if (postOne.series && postTwo.series) {
    postOne.series.forEach((serie) => {
      postTwo.series?.forEach((serieTwo) => {
        if (serie.series === serieTwo.series) {
          points += 4;
        }
      });
    });
  }
  if (postOne.category === postTwo.category) {
    points += 1;
  }
  if (postOne.type && postTwo.type && postOne.type === postTwo.type) {
    points += 1;
  }
  if (
    postOne.publishedYear &&
    postTwo.publishedYear &&
    (typeof postOne.publishedYear === "string"
      ? Number.parseInt(postOne.publishedYear, 10)
      : postOne.publishedYear) ===
    (typeof postTwo.publishedYear === "string"
      ? Number.parseInt(postTwo.publishedYear, 10)
      : postTwo.publishedYear)
  ) {
    points += 1;
  }
  if (
    postOne.ogPublishedYear &&
    postTwo.ogPublishedYear &&
    (typeof postOne.ogPublishedYear === "string"
      ? Number.parseInt(postOne.ogPublishedYear, 10)
      : postOne.ogPublishedYear) ===
    (typeof postTwo.ogPublishedYear === "string"
      ? Number.parseInt(postTwo.ogPublishedYear, 10)
      : postTwo.ogPublishedYear)
  ) {
    points += 1;
  }
  if (postOne.format && postTwo.format && postOne.format === postTwo.format) {
    points += 1;
  }
  if (
    postOne.publisher &&
    postTwo.publisher &&
    postOne.publisher === postTwo.publisher
  ) {
    points += 1;
  }
  if (postOne.rating && postTwo.rating && postOne.rating === postTwo.rating) {
    points += 1;
  }
  return points;
}

function writeRelatedToDisk(
  postSlug: string,
  relatedPostSlugs: Map<string, number>
) {
  // this ugly row sort the map by score, then creates a new array of slugs and then slices it to get the desired amount of slugs
  // return Array.from(new Map([...relatedPostSlugs].sort((a, b) => b[1] - a[1])).keys()).slice(0, 6);
  const topSlugs = Array.from(
    new Map([...relatedPostSlugs].sort((a, b) => b[1] - a[1])).keys()
  ).slice(0, 4);

  const data = topSlugs.map((slug) => {
    const post =
      PostsDataSingleton.getInstance().getPostsForHomepageBySlug(slug);
    return {
      title: post.data.title,
      image: `/static/images/books/${post.data.image}`,
      slug: post.data.slug,
    };
  });

  return fs.writeFile(
    `./src/data/related-posts/${postSlug}.json`,
    JSON.stringify(data)
  );
}

export default function genRelated(): Promise<void[]> {
  const postsMetadataMap: Map<string, PostWithFullData> = getMapData();

  const promises: Array<Promise<void>> = [];

  postsMetadataMap.forEach((post, slug) => {
    const relatedPostSlugs: Map<string, number> = new Map();
    postsMetadataMap.forEach((related_post, related_slug) => {
      // same post, ignore
      if (slug === related_slug) return;
      // calc the points
      relatedPostSlugs.set(
        related_slug,
        calculateRelationshipPoints(post, related_post)
      );
    });

    promises.push(writeRelatedToDisk(slug, relatedPostSlugs))
  });

  return Promise.all(promises);
}

interface PostWithFullData {
  title: string;
  image: string;
  slug: string;
  keywords: Array<string>;
  category: string;
  type?: string;
  author?: Array<string>;
  genres?: Array<string>;
  publishedYear?: string | number;
  ogPublishedYear?: string | number;
  format?: string;
  publisher?: string;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  series?: [
    {
      series: string;
      numInSeries: string | number;
    }
  ];
}
