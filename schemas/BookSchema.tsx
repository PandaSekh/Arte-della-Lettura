/* eslint-disable react/no-danger */
import Book from "../interfaces/Book";
import Audiobook from "../interfaces/Audiobook";
import { bookReviewSchemaGen } from "./SchemaGenerators";

export default function BookSchema({ book }: { book: Book | Audiobook }): JSX.Element {
  return (
    <script
      key={`bookSchema-${book.isbn13}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bookReviewSchemaGen(book)) }}
    />
  );
}
