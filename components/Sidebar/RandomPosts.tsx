import Link from "next/link";
import Image from "next/image";
import RandomPost from "@interfaces/RandomPost";

export default function RandomPosts({
  randomBooks,
}: {
  randomBooks: Array<RandomPost>;
}): JSX.Element {
  const posts = randomBooks.map((book) => (
    <div
      className="lg:w-64 lg:h-72 w-52 h-56 relative my-4 transition-opacity opacity-100 hover:opacity-80"
      key={book.title}
    >
      <Link href={`/${encodeURIComponent(book.slug)}`}>
        <a>
          <Image
            src={`/static/images/${book.image}`}
            loading="lazy"
            alt={book.title || "Copertina libro"}
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
    </div>
  ));
  return <>{posts}</>;
}
