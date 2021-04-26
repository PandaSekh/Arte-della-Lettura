import Book from "../interfaces/Book";

export function getBookPages(book: Book) {
  const pages = book.pages;
  return typeof pages === "string" ? Number.parseInt(pages) : pages
}