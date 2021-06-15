import { GetStaticProps } from "next";
import Link from "next/link";
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

  const Archives = () => {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-5">
        <p>
          <Link href="/autori">
            <a className="text-customBlue hover:underline text-xl" type="link">
              Recensioni per Autore
            </a>
          </Link>
        </p>
        <p>
          <Link href="/case-editrici">
            <a className="text-customBlue hover:underline text-xl" type="link">
              Recensioni per Editore
            </a>
          </Link>
        </p>
        <p>
          <Link href="/generi">
            <a className="text-customBlue hover:underline text-xl" type="link">
              Recensioni per Genere
            </a>
          </Link>
        </p>
        <p>
          <Link href="/serie">
            <a className="text-customBlue hover:underline text-xl" type="link">
              Recensioni per Serie
            </a>
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div className="mx-auto archive">
      <h2 className="text-center mx-auto">Archivio Recensioni</h2>
      <Archives />
      <ul>{prettyPrintData}</ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: Array<BookWithTitleSlugAuthorRating> = DataSingleton.getInstance().getBooks();

  return { props: { data } };
};
