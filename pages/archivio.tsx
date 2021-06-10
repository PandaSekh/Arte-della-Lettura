import { GetStaticProps } from "next";
import BookTitleWithStars from "../components/Archives/BookTitleWithStars";
import keygen from "../lib/keyGen";

import DataSingleton, { BookWithTitleSlugAuthorRating } from "../dataFetchers/postsData";

export default function Archivio({ data }: { data: Array<BookWithTitleSlugAuthorRating> }): JSX.Element {
  const prettyPrintData = data.map((book) => {
    return (
      <li key={keygen()}>
        <BookTitleWithStars bookTitleSlug={book} />
        <style jsx>
          {`
            li::before {
              content: "";
              position: absolute;
              background-color: #d1d5db;
              border-radius: 50%;
              width: 0.375em;
              height: 0.375em;
              top: calc(0.875em - 0.1875em);
              left: 0.25em;
            }

            li {
              position: relative;
              padding-left: 1.75em;
            }

            li {
              margin-top: 1.25em;
              margin-bottom: 1.25em;
            }
          `}
        </style>
      </li>
    );
  });

  return (
    <div className="mx-auto archive">
      <h2 className="text-center mx-auto">Archivio Recensioni</h2>
      <ul>{prettyPrintData}</ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Array<BookWithTitleSlugAuthorRating> = DataSingleton.getInstance().getBooks();

  return { props: { data } };
};
