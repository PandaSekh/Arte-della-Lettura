import { getImgUrl } from "../lib/sanityClient";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import getKey from "../lib/keyGen";
import stringToSlug from "../lib/stringToSlug";

export default function Book({ slug }) {
	const book = require(`../books/${slug}.json`);
	console.log(book);
	console.log(book.author.map(singleAuthor => singleAuthor));

	return (
		<Fragment>
			<div className="book-block">
				<div className="cover">
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
						<Fragment>
							<strong>Serie:</strong> {book.series.join(", ")}
							<br />
						</Fragment>
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
					<Fragment>
						<strong>Valutazione:</strong>
						<Stars rating={book.rating} />
					</Fragment>
				</p>
				<blockquote className="synopsys">{book.synopsis}</blockquote>
			</div>
			<div className="bookBlockEnd"></div>
		</Fragment>
	);
}

const Stars = ({ rating }) => {
	return (
		<span className="stars" data-stars={rating}>
			<svg height="25" width="23" className="star rating" data-rating="1">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="2">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="3">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="4">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
			<svg height="25" width="23" className="star rating" data-rating="5">
				<polygon
					points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
					fillRule="nonzero"
				/>
			</svg>
		</span>
	);
};
