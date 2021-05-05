import BookTitleWithStars from "../components/Archives/BookTitleWithStars";
import BookTitleSlug from "../interfaces/BookTitleSlug";
import { getBooks } from "../lib/archivesAPI";

export default function Archivio({ data }: { data: Array<BookTitleSlug> }) {
  const prettyPrintData = data.map((book) => {
    return (
      <ul>
        <BookTitleWithStars bookTitleSlug={book} />
      </ul>;
    );
  });

  return (
    <div className="mx-auto archive">
      <h2 className="text-center mx-auto">Archivio Recensioni</h2>
      {prettyPrintData}
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

export const getStaticProps = async () => {
  const data: Array<BookTitleSlug> = getBooks();

  return { props: { data } };
};
