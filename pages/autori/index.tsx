import Link from "next/link";
import { GetStaticProps } from "next";
import DataSingleton, {
  BookWithTitleSlugAuthorRating,
} from "@fetchers/postsData";
import { stringToSlug, getKey as keygen } from "@lib/utils";
import { ReactElement } from "react";

// create a map with a letter as key and authors as values
function mapAuthorsWithInitials(authors: Array<string>) {
  const alphabetMap = new Map<string, Array<string>>();
  authors.forEach((author) => {
    const authorsArray = alphabetMap.get(author.charAt(0)) || [];
    authorsArray.push(author);
    authorsArray.sort();
    alphabetMap.set(author.charAt(0), authorsArray);
  });
  return alphabetMap;
}

export default function Index({
  authorBookJSON,
}: {
  authorBookJSON: string;
}): ReactElement | null {
  const authorsBooksMap: Map<
    string,
    Array<BookWithTitleSlugAuthorRating>
  > = new Map(JSON.parse(authorBookJSON));
  const authorsWithAlphabet = new Map(
    [
      ...mapAuthorsWithInitials(Array.from(authorsBooksMap.keys())).entries(),
    ].sort()
  );
  const toBePrinted: Array<ReactElement | null> = [];

  // for each letter
  authorsWithAlphabet.forEach((authors: Array<string>, char: string) => {
    const authorsMapped: Array<ReactElement | null> = [];

    // get the books for each author
    const authorsWithBooks: Map<
      string,
      Array<BookWithTitleSlugAuthorRating>
    > = new Map<string, Array<BookWithTitleSlugAuthorRating>>();
    authors.forEach((author) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      authorsWithBooks.set(author, authorsBooksMap.get(author)!);
    });

    // for each author pretty print their books
    authorsWithBooks.forEach(
      (books: Array<BookWithTitleSlugAuthorRating>, author: string) => {
        const bookTitles = books.map((book) => {
          return (
            <li key={keygen()}>
              <Link
                href={book.reviewSlug}
                className="text-customBlue hover:underline"
                type="link">

                {book.title}

              </Link>
            </li>
          );
        });

        authorsMapped.push(
          <div key={keygen()}>
            <Link href={`autori/${stringToSlug(author)}`} className="underline">
              {author}
            </Link>
            : <ul>{bookTitles}</ul>
          </div>
        );
      }
    );

    // print the letter and the authors with books
    toBePrinted.push(
      <div className="my-4" key={keygen()}>
        <h3>{char}</h3>
        {authorsMapped}
      </div>
    );
  });

  return (
    <div className="archive md:mx-auto md:p-0 p-6 mx-6">
      <h2 className="text-center mx-auto">Recensioni per Autore</h2>
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
  const authors = DataSingleton.getInstance().getAuthorsArray();
  const authorAndBooks = new Map<
    string,
    Array<BookWithTitleSlugAuthorRating>
  >();
  authors.forEach((author) =>
    authorAndBooks.set(
      author,
      DataSingleton.getInstance().getAuthorBookTitleSlug(stringToSlug(author))
    )
  );
  const authorBookJSON = JSON.stringify([...authorAndBooks]);
  return { props: { authorBookJSON } };
};
