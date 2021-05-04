import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Book from "../interfaces/Book";
import stringToSlug from "./stringToSlug"

export const POSTS_PATH = path.join(process.cwd(), "posts");
export const BOOKS_PATH = path.join(process.cwd(), "books");

const bookPath = fs.readdirSync(BOOKS_PATH);

export function getAuthorsSlug() {
  const authorsSlug: Array<string> = []
  bookPath.map(book => {
    const source: Book = JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, book))))
    source.author.forEach(author => authorsSlug.push(stringToSlug(author)))
  })
  return authorsSlug.filter((slug, index) => authorsSlug.indexOf(slug) == index)
}

function getBooks(): Array<Book> {
  return bookPath.map(book => JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, book)))))
}

export function getAuthorBooks(authorSlug: string): Array<Book> {
  return getBooks().filter(book => {
    const authors = book.author.map(author => stringToSlug(author));
    return authors.includes(authorSlug)
  })
}