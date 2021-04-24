import Link from "next/link";

export default function ReadMore(props) {
	return (
		<div className="readMoreButton text-center m-auto w-max p-3 bg-customBlue hover:bg-customBlue-light mt-4 rounded ease-in-out duration-300 cursor-pointer">
			<Link href={`/${encodeURIComponent(props.slug)}`}>
				<a aria-label="Leggi il post completo">Continua a leggere</a>
			</Link>
			<style jsx>{"color: white"}</style>
		</div>
	);
}
