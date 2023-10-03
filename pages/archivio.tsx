import { GetStaticProps } from "next";
import Link from "next/link";
import DataSingleton, {
  BookWithTitleSlugAuthorRating,
} from "@fetchers/postsData";
import { getKey as keygen } from "@lib/utils";
import BookTitleWithStars from "@components/Stars/BookTitleWithStars";
import { ReactElement } from "react";

export default function Archivio({
  data,
}: {
  data: Array<BookWithTitleSlugAuthorRating>;
}): ReactElement | null {
  const prettyPrintData = data.map((book) => {
    return (
      <li key={keygen()} className="relative px-7 my-6">
        <BookTitleWithStars bookTitleSlug={book} />
      </li>
    );
  });

  const Archives = () => {
    return (
      <div className="flex flex-row flex-wrap justify-center md:gap-5 md:mx-auto mx-6">
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
  const data: Array<BookWithTitleSlugAuthorRating> =
    DataSingleton.getInstance().getBooks();

  return { props: { data } };
};
