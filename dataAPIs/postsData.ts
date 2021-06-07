import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getDateFromStringMMDDYYYY } from "../lib/timeUtils";
import stringToSlug from "../lib/stringToSlug";

import Book from "../interfaces/Book";
import Post from "../interfaces/Post";

const POSTS_PATH = path.join(process.cwd(), "posts");
const BOOKS_PATH = path.join(process.cwd(), "books");

export default class PostsDataSingleton {
  private static instance: PostsDataSingleton;

  private posts: Array<Post>;

  private publishedPostsPath: Array<string>;

  private publishedPostsSlug: Array<SlugParam>;

  private bookPath: Array<string>;

  private books: Array<Book>;

  private authors: Array<string>;

  private authorSlugs: Array<string>;

  private constructor() {
    this.publishedPostsPath = PostsDataSingleton.getPublishedPostPath();
    this.publishedPostsSlug = this.getPublishedPostSlug();
    this.posts = this.getPostsMethod();

    this.bookPath = PostsDataSingleton.getBooksPath();
    this.books = this.bookPath.map((book) => JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, book)))));
    this.authors = this.getAuthors();
    this.authorSlugs = this.authors.map((author) => stringToSlug(author));
  }

  public static getInstance(): PostsDataSingleton {
    if (!PostsDataSingleton.instance) {
      PostsDataSingleton.instance = new PostsDataSingleton();
    }
    return PostsDataSingleton.instance;
  }

  public getAuthorsArray(): Array<string> {
    return this.authors;
  }

  public getBooks(): Array<Book> {
    return this.books;
  }

  public getBookByReviewSlug(slug: string): Book | undefined {
    return this.books.find((book) => book.reviewSlug === slug);
  }

  /**
   * Returns all the posts
   * @returns Array<Post>
   */
  public getPosts(sliceFrom: number | undefined = undefined, sliceTo: number | undefined = undefined): Array<Post> {
    return this.posts.slice(sliceFrom, sliceTo);
  }

  /**
   * Returns all the posts slugs
   * @returns Array<Post>
   */
  public getSlugs(): Array<SlugParam> {
    return this.publishedPostsSlug;
  }

  /**
   * Returns a single post file by slug
   * @param slug string
   * @returns Buffer
   */
  public static getPostBySlug(slug: string): Buffer {
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    return fs.readFileSync(postFilePath);
  }

  public getPublishedPostsForHomepage(
    sliceFrom: number | undefined = undefined,
    sliceTo: number | undefined = undefined
  ): Array<HomepagePostData> {
    return this.publishedPostsPath
      .map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { data } = matter(source);

        return {
          data,
          filePath,
        };
      })
      .filter((post) => post)
      .sort(
        (a, b) =>
          getDateFromStringMMDDYYYY(b.data.publishedAt).getTime() -
          getDateFromStringMMDDYYYY(a.data.publishedAt).getTime()
      )
      .slice(sliceFrom, sliceTo);
  }

  public getPostsForHomepageBySlug(slug: string): HomepagePostData {
    const filePath =
      this.publishedPostsPath
        .map((postPath) => postPath.replace(new RegExp(/\.mdx?$/, "ig"), ""))
        .find((postFilePath) => postFilePath === slug) || "";
    const source = fs.readFileSync(path.join(POSTS_PATH, `${filePath}.mdx`));
    const { data } = matter(source);

    return {
      data,
      filePath,
    };
  }

  /**
   *  Should only be ran once in the constructor.
   * @returns Get all the slugs for the posts
   */
  private getPublishedPostSlug(): Array<SlugParam> {
    return this.publishedPostsPath
      .map((postPath) => postPath.replace(new RegExp(/\.mdx?$/, "ig"), ""))
      .map((slug) => ({ params: { slug } }));
  }

  /**
   * Get a list of all Posts. Should only be ran once in the constructor.
   * @returns Array of all posts filename
   */
  private static getPublishedPostPath(): string[] {
    return fs.readdirSync(POSTS_PATH).filter((filePath) => new RegExp(/\.mdx?$/, "ig").test(filePath));
  }

  /**
   * Get all the posts in the posts folder. Should only be ran once in the constructor.
   * @returns Array<Post>
   */
  private getPostsMethod(): Array<Post> {
    return this.publishedPostsPath
      .map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { content, data } = matter(source);

        return {
          content,
          data,
          filePath,
        };
      })
      .filter((post) => post)
      .sort(
        (a: PostWithFilepath, b: PostWithFilepath) =>
          getDateFromStringMMDDYYYY(b.data.publishedAt).getTime() -
          getDateFromStringMMDDYYYY(a.data.publishedAt).getTime()
      );
  }

  /// /////////////////////////////////
  /// / BOOKS
  /// /////////////////////////////////

  private getBasicBooks(): Array<BookWithTitleSlugAuthorRating> {
    return this.books.map((book) => {
      return {
        title: book.title,
        reviewSlug: book.reviewSlug,
        author: book.author,
        rating: book.rating,
      };
    });
  }

  public getAuthorSlugs(): Array<string> {
    return this.authorSlugs;
  }

  public getAuthorBookTitleSlug(authorSlug: string): Array<BookWithTitleSlugAuthorRating> {
    return this.getBasicBooks().filter((book) => {
      const authors = book.author.map((author) => stringToSlug(author));
      return authors.includes(authorSlug);
    });
  }

  public getFullBooksFromAuthorSlug(authorSlug: string): Array<HomepagePostData> {
    const booksAuthor = this.getAuthorBookTitleSlug(authorSlug);
    const reviews: Array<HomepagePostData> = [];
    booksAuthor.forEach((book) => {
      reviews.push(this.getPostsForHomepageBySlug(book.reviewSlug));
    });
    return reviews;
  }

  /**
   * Get a list of all Books. Should only be ran once in the constructor.
   * @returns Array of all posts filename
   */
  private static getBooksPath(): string[] {
    return fs.readdirSync(BOOKS_PATH).filter((filePath) => /\.json?$/.test(filePath));
  }

  private getAuthors(): Array<string> {
    const authors: Array<string> = [];
    this.books.forEach((book) => {
      book.author.forEach((author) => authors.push(author));
    });
    return authors.filter((slug, index) => authors.indexOf(slug) === index);
  }
}
interface PostWithFilepath {
  content: string;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  filePath: string;
}

interface SlugParam {
  params: {
    slug: string;
  };
}

interface HomepagePostData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [key: string]: any };
  filePath: string;
}

interface BookWithTitleSlugAuthorRating {
  title: string;
  reviewSlug: string;
  author: Array<string>;
  rating: number;
}

export type { Post, PostWithFilepath, SlugParam, HomepagePostData, BookWithTitleSlugAuthorRating };
