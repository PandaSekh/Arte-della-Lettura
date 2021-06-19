import Link from "next/link";
import { BookWithTitleSlugAuthorRating } from "../../dataFetchers/postsData";
import InlineStars from "./InlineStars";

export default function BookTitleWithStars({
  bookTitleSlug,
}: {
  bookTitleSlug: BookWithTitleSlugAuthorRating;
}): JSX.Element {
  const LinkComponent = (
    <Link href={`/${bookTitleSlug.reviewSlug}`}>
      <a className="text-customBlue hover:underline">{bookTitleSlug.title}</a>
    </Link>
  );

  return (
    <InlineStars
      Component={LinkComponent}
      rating={bookTitleSlug.rating}
      type="book"
    />
  );
}
