import fs from "fs";
import path from "path";
import Book from "../interfaces/Book";
import BookTitleSlug from "../interfaces/BookTitleSlug";
import stringToSlug from "./stringToSlug";
import { getPostsForHomepageBySlug } from "./postsAPI";

export const POSTS_PATH = path.join(process.cwd(), "posts");
export const BOOKS_PATH = path.join(process.cwd(), "books");

const bookPath = fs.readdirSync(BOOKS_PATH);

export function getAuthorsSlug(): Array<string> {
  const authorsSlug: Array<string> = [];
  bookPath.forEach((book) => {
    const source: Book = JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, book))));
    source.author.forEach((author) => authorsSlug.push(stringToSlug(author)));
  });
  return authorsSlug.filter((slug, index) => authorsSlug.indexOf(slug) === index);
}

export function getAuthors(): Array<string> {
  const authors: Array<string> = [];
  bookPath.forEach((book) => {
    const source: Book = JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, book))));
    source.author.forEach((author) => authors.push(author));
  });
  return authors.filter((slug, index) => authors.indexOf(slug) === index);
}

export function getBooks(): Array<BookTitleSlug> {
  const booksJSON: Array<Book> = bookPath.map((book) =>
    JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, book))))
  );
  return booksJSON.map((book) => {
    return {
      title: book.title,
      reviewSlug: book.reviewSlug,
      author: book.author,
      rating: book.rating,
    };
  });
}

export function getAuthorBookTitleSlug(authorSlug: string): Array<BookTitleSlug> {
  return getBooks().filter((book) => {
    const authors = book.author.map((author) => stringToSlug(author));
    return authors.includes(authorSlug);
  });
}

export function getFullBooksFromAuthorSlug(
  authorSlug: string
): Array<{
  data: {
    [key: string]: any;
  };
  filePath: string;
}> {
  const booksAuthor = getAuthorBookTitleSlug(authorSlug);
  const reviews: { data: { [key: string]: unknown }; filePath: string }[] = [];
  booksAuthor.forEach((book) => {
    reviews.push(getPostsForHomepageBySlug(book.reviewSlug));
  });
  return reviews;
}
