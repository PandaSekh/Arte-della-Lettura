/* eslint-disable react/no-danger */
import Book from "@interfaces/Book";
import Audiobook from "@interfaces/Audiobook";
import { bookReviewSchemaGen } from "@schemas/SchemaGenerators";
import { ReactElement } from "react";

export default function BookSchema({
  book,
}: {
  book: Book | Audiobook;
}): ReactElement | null {
  return (
    <script
      key={`bookSchema-${book.isbn13}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(bookReviewSchemaGen(book)),
      }}
    />
  );
}
