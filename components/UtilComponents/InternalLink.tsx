import Link from "next/link";

export default function CustomLink({ slug, text }: { slug: string; text: string }): JSX.Element {
  return (
    <>
      <Link href={`/${encodeURIComponent(slug)}`}>
        <a>{text}</a>
      </Link>
    </>
  );
}
