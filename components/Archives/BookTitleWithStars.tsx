import BookTitleSlug from "../../interfaces/BookTitleSlug";
import keygen from "../../lib/keyGen"
import Link from "next/link";
import InlineStars from "../UtilComponents/ComponentWithStarsInline";

export default function BookTitleWithStars({ bookTitleSlug }: { bookTitleSlug: BookTitleSlug }) {
  const LinkComponent = (
    <Link href={bookTitleSlug.reviewSlug}>
      <a className="text-customBlue hover:underline">
        {bookTitleSlug.title}
      </a>
    </Link>
  )

  return (
    <li key={keygen()}>
      <InlineStars Component={LinkComponent} rating={bookTitleSlug.rating} />
    </li>
  )
}