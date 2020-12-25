import Link from "next/link";

export default function ReadMore(props) {
	return (
		<div className="readMoreButton">
			<Link href={`/${encodeURIComponent(props.slug)}`}>
				<a aria-label="Leggi il post completo">Continua a leggere</a>
			</Link>
		</div>
	);
}
