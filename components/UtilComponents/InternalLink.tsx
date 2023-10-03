import Link from "next/link";
import { ReactElement } from "react";

export default function CustomLink({
  slug,
  text,
}: {
  slug: string;
  text: string;
}): ReactElement | null {
  return (
    <>
      <Link href={`/${encodeURIComponent(slug)}`}>
        <a className="text-customBlue cursor-pointer underline">{text}</a>
      </Link>
    </>
  );
}
