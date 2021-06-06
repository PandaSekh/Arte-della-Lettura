/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import dynamic from "next/dynamic";
import Audiobook from "../../interfaces/Audiobook";
import getKey from "../../lib/keyGen";
import stringToSlug from "../../lib/stringToSlug";
import Intersperse from "../UtilComponents/Intersperse";

export default function BookElement({ slug }: { slug: string }): JSX.Element {
  const audiobook: Audiobook = require(`../../books/${slug}.json`);
  const Link = dynamic(() => import("next/link"));
  const Image = dynamic(() => import("next/image"));
  const BoldTextWithStars = dynamic(() => import("../UtilComponents/BoldTextWithStars"));
  const BookSchema = dynamic(() => import("../../schemas/BookSchema"));

  return (
    <>
      <BookSchema book={audiobook} />
      <div className="mt-6 max-w-7xl">
        <div className="mr-4 float-left">
          <Image src={`/static/images/books/${audiobook.image}`} width={300} height={300} />
        </div>
        <p>
          <strong>{audiobook.title}</strong> di{" "}
          <Intersperse
            sep=", "
            arr={audiobook.author.map((singleAuthor) => (
              <Link key={getKey()} href={`/autori/${encodeURIComponent(stringToSlug(singleAuthor))}`}>
                <a>{singleAuthor}</a>
              </Link>
            ))}
          />
          <br />
          <strong>Narratore</strong>:{" "}
          <Intersperse sep=", " arr={audiobook.reader.map((singleReader) => singleReader)} />
          <br />
          {audiobook.series && (
            <>
              <strong>Serie:</strong>{" "}
              <Link key={getKey()} href={`/serie/${encodeURIComponent(stringToSlug(audiobook.series[0].series))}`}>
                <a>
                  {audiobook.series[0].series} #{audiobook.series[0].numInSeries}
                </a>
              </Link>
              <br />
            </>
          )}
          <strong>Casa Editrice:</strong>{" "}
          <Link key={getKey()} href={`/case-editrici/${encodeURIComponent(stringToSlug(audiobook.publisher))}`}>
            <a>{audiobook.publisher}</a>
          </Link>
          <br />
          <strong>{audiobook.genres.length === 1 ? "Genere" : "Generi"}:</strong>{" "}
          <Intersperse
            sep=", "
            arr={audiobook.genres.map((genre: string) => (
              <Link key={getKey()} href={`/generi/${encodeURIComponent(stringToSlug(genre))}`}>
                <a>{genre}</a>
              </Link>
            ))}
          />
          <br />
          <strong>Durata:</strong> {audiobook.duration}
          <br />
          <BoldTextWithStars text="Valutazione: " rating={audiobook.rating} />
          <style jsx>
            {`
              p {
                margin: 0px;
              }
            `}
          </style>
        </p>
        <blockquote>{audiobook.synopsis}</blockquote>
      </div>
      <div className="clear-both" />
      <hr className="my-6 border-dark-grayText dark:border-customBlue-light border-opacity-40 border-t-2 w-4/12 mx-auto" />
    </>
  );
}
