import Link from "next/link";
import Image from "next/image";
import Book from "../../interfaces/Book";

export default function RandomPosts({
  randomBooks,
}: {
  randomBooks: Array<Book>;
}): JSX.Element {
  const posts = randomBooks.map((book) => (
    <div
      className="lg:w-64 lg:h-72 w-52 h-56 relative my-4 transition-opacity opacity-100 hover:opacity-80"
      key={book.title}
    >
      <Link href={`/${encodeURIComponent(book.reviewSlug)}`}>
        <a>
          <Image
            src={`/static/images/books/${book.image}`}
            loading="lazy"
            alt={book.title}
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
    </div>
  ));
  return <>{posts}</>;
}
