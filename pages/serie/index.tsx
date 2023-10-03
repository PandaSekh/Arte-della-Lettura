import Link from "next/link";
import { GetStaticProps } from "next";
import DataSingleton from "@fetchers/postsData";
import { stringToSlug, getKey as keygen } from "@lib/utils";
import Book from "@interfaces/Book";
import { ReactElement } from "react";

// create a map with a letter as key and authors as values
function mapSeriesWithInitials(series: Array<string>) {
  const alphabetMap = new Map<string, Array<string>>();
  series.forEach((serie) => {
    const array = alphabetMap.get(serie.charAt(0)) || [];
    array.push(serie);
    array.sort();
    alphabetMap.set(serie.charAt(0), array);
  });
  return alphabetMap;
}

export default function Index({
  booksJSON,
}: {
  booksJSON: string;
}): ReactElement | null {
  const books: Map<string, Array<Book>> = new Map(JSON.parse(booksJSON));
  const seriesAlphabet = new Map(
    [...mapSeriesWithInitials(Array.from(books.keys())).entries()].sort()
  );
  const toBePrinted: Array<ReactElement | null> = [];

  // for each letter
  seriesAlphabet.forEach((series: Array<string>, char: string) => {
    const authorsMapped: Array<ReactElement | null> = [];

    // get the books for each author
    const authorsWithBooks: Map<string, Array<Book>> = new Map<
      string,
      Array<Book>
    >();
    series.forEach((serie) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      authorsWithBooks.set(serie, books.get(serie)!);
    });

    // for each author pretty print their books
    authorsWithBooks.forEach((booksValue: Array<Book>, author: string) => {
      const bookTitles = booksValue
        .sort((a: Book, b: Book) => {
          return (
            (a.series[0].numInSeries as number) -
            (b.series[0].numInSeries as number)
          );
        })
        .map((book) => {
          return (
            <li key={keygen()} className="relative px-7 my-6">
              <Link href={book.reviewSlug}>
                <a className="text-customBlue hover:underline" type="link">
                  {book.title} (#{book.series[0].numInSeries})
                </a>
              </Link>
            </li>
          );
        });

      authorsMapped.push(
        <div key={keygen()}>
          <Link href={`serie/${stringToSlug(author)}`}>
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
    <div className="archive md:mx-auto md:p-0 p-6 mx-6">
      <h2 className="text-center mx-auto">Recensioni per Serie</h2>
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
  const series = DataSingleton.getInstance().getSeries();
  const books = new Map<string, Array<Book>>();
  series.forEach((serie) =>
    books.set(
      serie,
      DataSingleton.getInstance().getBookFromSerieSlug(stringToSlug(serie))
    )
  );
  const booksJSON = JSON.stringify([...books]);
  return { props: { booksJSON } };
};
