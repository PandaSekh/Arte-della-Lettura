import dynamic from "next/dynamic";
import Audiobook from "@interfaces/Audiobook";
import { getKey, stringToSlug } from "@lib/utils";
import { ReactElement } from "react";

export default function BookElement({
  slug,
}: {
  slug: string;
}): ReactElement | null {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const audiobook: Audiobook = require(`../../src/data/books/${slug}.json`);
  const Link = dynamic(() => import("next/link"));
  const Image = dynamic(() => import("next/image"));
  const BoldTextWithStars = dynamic(() => import("../Stars/BoldTextWithStars"));
  const BookSchema = dynamic(() => import("@schemas/BookSchema"));
  const Intersperse = dynamic(() => import("../UtilComponents/Intersperse"));

  return (
    <>
      <BookSchema book={audiobook} />
      <div className="mt-6 max-w-7xl">
        <div className="mr-4 float-left">
          <Image
            src={`/static/images/${audiobook.image}`}
            width={300}
            height={300}
            alt="Audiobook Cover"
          />
        </div>
        <p className="m-0">
          <strong>{audiobook.title}</strong> di{" "}
          <Intersperse
            sep=", "
            arr={audiobook.author.map((singleAuthor) => (
              <Link
                key={getKey()}
                href={`/autori/${encodeURIComponent(
                  stringToSlug(singleAuthor)
                )}`}
              >
                {singleAuthor}
              </Link>
            ))}
          />
          <br />
          <strong>Narratore</strong>:{" "}
          <Intersperse
            sep=", "
            arr={audiobook.reader.map((singleReader) => singleReader)}
          />
          <br />
          {audiobook.series && (
            <>
              <strong>Serie:</strong>{" "}
              <Link
                key={getKey()}
                href={`/serie/${encodeURIComponent(
                  stringToSlug(audiobook.series[0].series)
                )}`}
              >
                {audiobook.series[0].series} #{audiobook.series[0].numInSeries}
              </Link>
              <br />
            </>
          )}
          <strong>Casa Editrice:</strong>{" "}
          <Link
            key={getKey()}
            href={`/case-editrici/${encodeURIComponent(
              stringToSlug(audiobook.publisher)
            )}`}
          >
            {audiobook.publisher}
          </Link>
          <br />
          <strong>
            {audiobook.genres.length === 1 ? "Genere" : "Generi"}:
          </strong>{" "}
          <Intersperse
            sep=", "
            arr={audiobook.genres.map((genre: string) => (
              <Link
                key={getKey()}
                href={`/generi/${encodeURIComponent(stringToSlug(genre))}`}
              >
                {genre}
              </Link>
            ))}
          />
          <br />
          <strong>Durata:</strong> {audiobook.duration}
          <br />
          <BoldTextWithStars text="Valutazione: " rating={audiobook.rating} />
        </p>
        <blockquote>{audiobook.synopsis}</blockquote>
      </div>
      <div className="clear-both" />
      <hr className="my-6 border-dark-grayText border-opacity-40 border-t-2 w-4/12 mx-auto" />
    </>
  );
}
