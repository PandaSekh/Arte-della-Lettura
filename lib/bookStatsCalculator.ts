import fs from "fs";
import path from "path";
import Book from "../interfaces/Book";

const BOOKS_PATH = path.join(process.cwd(), "books");
const BOOKS: Array<Book> = getBooks();

function getBooks() {
  return fs.readdirSync(BOOKS_PATH)
    .map(bookPath => {
      return JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, bookPath))));
    });
}

export default function getStatistics() {
  return { totalBooks: BOOKS.length }
}