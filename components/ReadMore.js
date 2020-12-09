import Link from "next/link";

export default function ReadMore(props) {
	return (
		<div className="readMoreButton">
			<Link href={`/${encodeURIComponent(props.slug)}`}>
				<a>Continua a leggere</a>
			</Link>
		</div>
	);
}
