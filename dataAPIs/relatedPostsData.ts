import Book from "../interfaces/Book";
import Post from "../interfaces/Post";
import PostsDataSingleton from "./postsData";

export default class RelatedPostsSingleton {
  private static instance: RelatedPostsSingleton;

  private postsMetadataMap: Map<string, PostWithFullData>;

  private constructor() {
    this.postsMetadataMap = new Map();
    this.getMapData();
  }

  /**
   * Gets the singleton instance
   * @returns RelatedPostsSingleton
   */
  public static getInstance(): RelatedPostsSingleton {
    if (!this.instance) {
      this.instance = new RelatedPostsSingleton();
    }
    return this.instance;
  }

  /**
   * Get the related posts given a post slug
   * @param postSlug the post slug
   * @returns array of top 5 posts slug
   */
  public getRelatedPosts(postSlug: string): Array<RelatedPost> {
    // this map will hold the post slug as key and it's score as value
    const relatedPostSlugs: Map<string, number> = new Map();
    // retrieve the data of the source post
    const postToAnalyze = this.postsMetadataMap.get(postSlug);
    // loop thru all the possible posts
    this.postsMetadataMap.forEach((post, slug) => {
      // same post, ignore
      if (slug === postSlug) return;
      // calc the points
      relatedPostSlugs.set(slug, RelatedPostsSingleton.calculateRelationshipPoints(postToAnalyze, post));
    });

    // this ugly row sort the map by score, then creates a new array of slugs and then slices it to get the desired amount of slugs
    // return Array.from(new Map([...relatedPostSlugs].sort((a, b) => b[1] - a[1])).keys()).slice(0, 6);
    const topSlugs = Array.from(new Map([...relatedPostSlugs].sort((a, b) => b[1] - a[1])).keys()).slice(0, 4);

    return topSlugs.map((slug) => {
      const post = PostsDataSingleton.getInstance().getPostsForHomepageBySlug(slug);
      return {
        title: post.data.title,
        image: post.data.image,
        slug: post.data.slug,
      };
    });
  }

  /**
   * Given two posts, calculates their score
   * @param postOne source post
   * @param postTwo compare post
   * @returns the score
   */
  private static calculateRelationshipPoints(postOne?: PostWithFullData, postTwo?: PostWithFullData): number {
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
        (typeof postTwo.publishedYear === "string" ? Number.parseInt(postTwo.publishedYear, 10) : postTwo.publishedYear)
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
    if (postOne.publisher && postTwo.publisher && postOne.publisher === postTwo.publisher) {
      points += 1;
    }
    if (postOne.rating && postTwo.rating && postOne.rating === postTwo.rating) {
      points += 1;
    }
    return points;
  }

  /**
   * Split a string into single words
   * @param phrase string to be splitted
   * @returns Array<string> of words
   */
  private static getKeywords(phrase: string): Array<string> {
    return phrase.split(/\b(\w+)\b/g).filter((word) => word.trim().length > 0);
  }

  /**
   * Get the data needed to populate the Map, and populates it
   */
  private getMapData(): void {
    const books: Array<Book> = PostsDataSingleton.getInstance().getBooks();
    const posts: Array<Post> = PostsDataSingleton.getInstance().getPosts();

    books.forEach((book: Book) => {
      // get the review (post)
      const bookReview = posts.find((post) => post.data.slug === book.reviewSlug);
      // delete the review from the array of posts
      if (bookReview) posts.splice(posts.indexOf(bookReview), 1);
      const fullData: PostWithFullData = {
        title: bookReview?.data?.title ? bookReview?.data?.title : book.title,
        image: bookReview?.data?.image ? bookReview?.data?.image : book.image,
        slug: bookReview?.data?.slug ? bookReview?.data?.slug : book.reviewSlug,
        keywords: RelatedPostsSingleton.getKeywords(book.title),
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
      this.postsMetadataMap.set(book.reviewSlug, fullData);
    });

    posts.forEach((post) =>
      this.postsMetadataMap.set(post.data.slug, {
        title: post.data.title,
        image: post.data.image,
        slug: post.data.slug,
        keywords: RelatedPostsSingleton.getKeywords(post.data.title),
        category: post.data.category,
        type: post.data.type ? post.data.type : undefined,
      })
    );
  }
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

export interface RelatedPost {
  title: string;
  slug: string;
  image: string;
}
