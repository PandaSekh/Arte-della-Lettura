import Link from "next/link";

export default function CustomLink({ postSlug, text }: {postSlug: string, text: string}): JSX.Element {
	return (
		<>
			<Link href={encodeURIComponent(postSlug)}>
				<a>{text}</a>
			</Link>
		</>
	);
}
