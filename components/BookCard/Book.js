import Image from "next/image";
import Link from "next/link";
import getKey from "../../lib/keyGen";
import stringToSlug from "../../lib/stringToSlug";
import Stars from "./Stars";

export default function Book({ slug }) {
	const book = require(`../../books/${slug}.json`);

	return (
		<>
			<div className="my-6">
				<div className="mr-4 float-left">
					<Image
						src={`/static/images/books/${book.image}`}
						width={275}
						height={420}
					/>
				</div>
				<p>
					<strong>{book.title}</strong> di{" "}
					{book.author
						.map(singleAuthor => (
							<Link
								key={getKey()}
								href={`/autori/${encodeURIComponent(
									singleAuthor.slug?.current
								)}`}
							>
								<a>{singleAuthor}</a>
							</Link>
						))
						.reduce((a, b) => [a, ", ", b])}
					<br />
					{book.series && (
						<>
							<strong>Serie:</strong> {book.series.join(", ")}
							<br />
						</>
					)}
					<strong>Casa Editrice:</strong>{" "}
					<Link
						key={getKey()}
						href={`/case-editrici/${encodeURIComponent(
							stringToSlug(book.publisher)
						)}`}
					>
						<a>{book.publisher}</a>
					</Link>
					<br />
					<strong>
						{book.genres.length === 1 ? "Genere" : "Generi"}:
					</strong>{" "}
					{/* Create an url and text for every genre and use reduce as a join */}
					{book.genres
						.map(genre => (
							<Link
								key={getKey()}
								href={`/generi/${encodeURIComponent(
									stringToSlug(genre)
								)}`}
							>
								<a>{genre}</a>
							</Link>
						))
						.reduce((a, b) => [a, ", ", b])}
					<br />
					<strong>Formato:</strong> {book.format}
					<br />
					<strong>Pagine:</strong> {book.pages}
					<br />
					<>
						<strong>Valutazione:</strong>
						<Stars rating={book.rating} />
					</>
				</p>
				<blockquote>{book.synopsis}</blockquote>
			</div>
			{/* <div className="clear-both mb-8"></div> */}
			<hr className="my-6 border-dark-grayText dark:border-customBlue-light border-opacity-40 border-t-2 w-4/12 mx-auto" />
		</>
	);
}
