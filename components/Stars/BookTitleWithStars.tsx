import Link from "next/link";
import { BookWithTitleSlugAuthorRating } from "@fetchers/postsData";
import InlineStars from "./InlineStars";
import { ReactElement } from "react";

export default function BookTitleWithStars({
  bookTitleSlug,
}: {
  bookTitleSlug: BookWithTitleSlugAuthorRating;
}): ReactElement | null {
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
