/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import dynamic from "next/dynamic";
import Book from "../../interfaces/Book";
import getKey from "../../lib/keyGen";
import stringToSlug from "../../lib/stringToSlug";
import Intersperse from "../UtilComponents/Intersperse";

export default function BookElement({ slug }: { slug: string }): JSX.Element {
  const book: Book = require(`../../books/${slug}.json`);
  const Link = dynamic(() => import("next/link"));
  const Image = dynamic(() => import("next/image"));
  const BoldTextWithStars = dynamic(() => import("../UtilComponents/BoldTextWithStars"));
  const BookSchema = dynamic(() => import("../../schemas/BookSchema"));

  return (
    <>
      <BookSchema book={book} />
      <div className="mt-6 max-w-7xl">
        <div className="mr-4 float-left">
          <Image src={`/static/images/books/${book.image}`} width={275} height={420} />
        </div>
        <p>
          <strong>{book.title}</strong> di{" "}
          <Intersperse
            sep=", "
            arr={book.author.map((singleAuthor) => (
              <Link key={getKey()} href={`/autori/${encodeURIComponent(stringToSlug(singleAuthor))}`}>
                <a>{singleAuthor}</a>
              </Link>
            ))}
          />
          <br />
          {book.series && (
            <>
              <strong>Serie:</strong>{" "}
              <Link key={getKey()} href={`/serie/${encodeURIComponent(stringToSlug(book.series[0].series))}`}>
                <a>
                  {book.series[0].series} #{book.series[0].numInSeries}
                </a>
              </Link>
              <br />
            </>
          )}
          <strong>Casa Editrice:</strong>{" "}
          <Link key={getKey()} href={`/case-editrici/${encodeURIComponent(stringToSlug(book.publisher))}`}>
            <a>{book.publisher}</a>
          </Link>
          <br />
          <strong>{book.genres.length === 1 ? "Genere" : "Generi"}:</strong>{" "}
          <Intersperse
            sep=", "
            arr={book.genres.map((genre: string) => (
              <Link key={getKey()} href={`/generi/${encodeURIComponent(stringToSlug(genre))}`}>
                <a>{genre}</a>
              </Link>
            ))}
          />
          <br />
          <strong>Formato:</strong> {book.format}
          <br />
          <strong>Pagine:</strong> {book.pages}
          <br />
          <BoldTextWithStars text="Valutazione: " rating={book.rating} />
          <style jsx>
            {`
              p {
                margin: 0px;
              }
            `}
          </style>
        </p>
        <blockquote>{book.synopsis}</blockquote>
      </div>
      <div className="clear-both" />
      <hr className="my-6 border-dark-grayText dark:border-customBlue-light border-opacity-40 border-t-2 w-4/12 mx-auto" />
    </>
  );
}
