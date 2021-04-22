import Link from "next/link";

export default function CustomLink({ postSlug, text }) {
	return (
		<>
			<Link href={encodeURIComponent(postSlug)}>
				<a>{text}</a>
			</Link>
		</>
	);
}
