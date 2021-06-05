import Book from "../interfaces/Book";

export default function getBookPages(book: Book): number {
  const { pages } = book;
  if (!pages) return 0;
  return typeof pages === "string" ? Number.parseInt(pages, 10) : pages;
}
