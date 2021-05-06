import fs from "fs";
import path from "path";
import Book from "../interfaces/Book";
import Statistics from "../interfaces/Statistics";
import getBookPages from "./bookUtils";
import { mapToJSON } from "./genericUtils";
import { getMonthFromDate } from "./timeUtils";

const BOOKS_PATH = path.join(process.cwd(), "books");

/**
 * Get all the books
 */
function getBooks(): Array<Book> {
  return fs.readdirSync(BOOKS_PATH).map((bookPath) => {
    return JSON.parse(String(fs.readFileSync(path.join(BOOKS_PATH, bookPath))));
  });
}

const BOOKS: Array<Book> = getBooks();

/**
 * Returns the average number of pages read
 */
function getAverageNumOfPages(): number {
  let totalPages = 0;
  BOOKS.forEach((book) => {
    totalPages += getBookPages(book);
  });
  return Math.floor(totalPages / BOOKS.length);
}

/**
 * Returns a Map of Books read per Month
 */
function getBooksReadPerMonth() {
  const booksPerMonthMap = new Map<number, number>();
  BOOKS.forEach((book) => {
    if (!book.readDate) return;
    const monthRead = getMonthFromDate(book.readDate);
    let booksReadPerMonth = booksPerMonthMap.get(monthRead);
    booksReadPerMonth ??= 0; // if undefined, assign 0
    booksPerMonthMap.set(monthRead, booksReadPerMonth + 1);
  });
  return new Map([...booksPerMonthMap.entries()].sort((a, b) => a[0] - b[0])); // Sort the arrat per month, from 1 to 12
}

export default function getStatistics(): Statistics {
  return {
    totalBooks: BOOKS.length,
    averagePages: getAverageNumOfPages(),
    booksPerMonth: mapToJSON(getBooksReadPerMonth()),
  };
}
