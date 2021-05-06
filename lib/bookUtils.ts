import Book from "../interfaces/Book";

export default function getBookPages(book: Book): number {
  const { pages } = book;
  return typeof pages === "string" ? Number.parseInt(pages, 10) : pages;
}
