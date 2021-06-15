import Link from "next/link";
import { GetStaticProps } from "next";
import stringToSlug from "../../lib/stringToSlug";
import keygen from "../../lib/keyGen";

import DataSingleton from "../../dataFetchers/postsData";
import Book from "../../interfaces/Book";

// create a map with a letter as key and authors as values
function mapEditorsWithInitials(editors: Array<string>) {
  const alphabetMap = new Map<string, Array<string>>();
  editors.forEach((editor) => {
    const array = alphabetMap.get(editor.charAt(0)) || [];
    array.push(editor);
    array.sort();
    alphabetMap.set(editor.charAt(0), array);
  });
  return alphabetMap;
}

export default function Index({ booksJSON }: { booksJSON: string }): JSX.Element {
  const books: Map<string, Array<Book>> = new Map(JSON.parse(booksJSON));
  const editorsAlphabet = new Map([...mapEditorsWithInitials(Array.from(books.keys())).entries()].sort());
  const toBePrinted: Array<JSX.Element> = [];

  // for each letter
  editorsAlphabet.forEach((editors: Array<string>, char: string) => {
    const authorsMapped: Array<JSX.Element> = [];

    // get the books for each author
    const authorsWithBooks: Map<string, Array<Book>> = new Map<string, Array<Book>>();
    editors.forEach((editor) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      authorsWithBooks.set(editor, books.get(editor)!);
    });

    // for each author pretty print their books
    authorsWithBooks.forEach((booksValue: Array<Book>, author: string) => {
      const bookTitles = booksValue.map((book) => {
        return (
          <li key={keygen()}>
            <Link href={book.reviewSlug}>
              <a className="text-customBlue hover:underline" type="link">
                {book.title}
              </a>
            </Link>
          </li>
        );
      });

      authorsMapped.push(
        <div key={keygen()}>
          <Link href={`case-editrici/${stringToSlug(author)}`}>
            <a className="underline">{author}</a>
          </Link>
          : <ul>{bookTitles}</ul>
        </div>
      );
    });

    // print the letter and the authors with books
    toBePrinted.push(
      <div className="my-4" key={keygen()}>
        <h3>{char}</h3>
        {authorsMapped}
      </div>
    );
  });

  return (
    <div className="archive mx-auto">
      <h2 className="text-center mx-auto">Recensioni per Casa Editrice</h2>
      {toBePrinted}
      <style>
        {`
        .archive ul > li::before {
						content: "";
						position: absolute;
						background-color: #d1d5db;
						border-radius: 50%;
						width: 0.375em;
						height: 0.375em;
						top: calc(0.875em - 0.1875em);
						left: 0.25em;
					}

					.archive ul > li {
						position: relative;
						padding-left: 1.75em;
					}

					.archive ul {
						margin-top: 1.25em;
						margin-bottom: 1.25em;
					}
        `}
      </style>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const publishers = DataSingleton.getInstance().getCaseEditrici();
  const books = new Map<string, Array<Book>>();
  publishers.forEach((publisher) =>
    books.set(publisher, DataSingleton.getInstance().getBookFromEditorSlug(stringToSlug(publisher)))
  );
  const booksJSON = JSON.stringify([...books]);
  return { props: { booksJSON } };
};
