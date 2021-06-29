import Link from "next/link";

export default function CustomLink({
  slug,
  text,
}: {
  slug: string;
  text: string;
}): JSX.Element {
  return (
    <>
      <Link href={`/${encodeURIComponent(slug)}`}>
        <a className="text-customBlue cursor-pointer underline">{text}</a>
      </Link>
    </>
  );
}
