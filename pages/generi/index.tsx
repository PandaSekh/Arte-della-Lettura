import Link from "next/link";
import { GetStaticProps } from "next";
import DataSingleton from "@fetchers/postsData";
import { stringToSlug, getKey as keygen } from "@lib/utils";
import Book from "@interfaces/Book";
import { ReactElement } from "react";

// create a map with a letter as key and authors as values
function mapGenresWithInitials(genres: Array<string>) {
  const alphabetMap = new Map<string, Array<string>>();
  genres.forEach((genre) => {
    const array = alphabetMap.get(genre.charAt(0)) || [];
    array.push(genre);
    array.sort();
    alphabetMap.set(genre.charAt(0), array);
  });
  return alphabetMap;
}

export default function Index({
  booksJSON,
}: {
  booksJSON: string;
}): ReactElement | null {
  const books: Map<string, Array<Book>> = new Map(JSON.parse(booksJSON));
  const genresAlphabet = new Map(
    [...mapGenresWithInitials(Array.from(books.keys())).entries()].sort()
  );
  const toBePrinted: Array<ReactElement | null> = [];

  // for each letter
  genresAlphabet.forEach((genres: Array<string>, char: string) => {
    const authorsMapped: Array<ReactElement | null> = [];

    // get the books for each author
    const authorsWithBooks: Map<string, Array<Book>> = new Map<
      string,
      Array<Book>
    >();
    genres.forEach((genre) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      authorsWithBooks.set(genre, books.get(genre)!);
    });

    // for each author pretty print their books
    authorsWithBooks.forEach((booksValue: Array<Book>, author: string) => {
      const bookTitles = booksValue.map((book) => {
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
          <Link href={`generi/${stringToSlug(author)}`} className="underline">
            {author}
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
    <div className="archive md:mx-auto md:p-0 p-6 mx-6">
      <h2 className="text-center mx-auto">Recensioni per Genere</h2>
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
  const genres = DataSingleton.getInstance().getGenres();
  const books = new Map<string, Array<Book>>();
  genres.forEach((genre) =>
    books.set(
      genre,
      DataSingleton.getInstance().getBookFromGenreSlug(stringToSlug(genre))
    )
  );
  const booksJSON = JSON.stringify([...books]);
  return { props: { booksJSON } };
};
