import Link from "next/link";
import { ReactElement } from "react";

export default function CustomLink({
  slug,
  text,
}: {
  slug: string;
  text: string;
}): ReactElement | null {
  return <>
    <Link
      href={`/${encodeURIComponent(slug)}`}
      className="text-customBlue cursor-pointer underline">
      {text}
    </Link>
  </>;
}
