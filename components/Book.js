import { getImgUrl } from "../lib/sanityClient";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import getKey from "../lib/keyGen";

export default function Book(props) {
	const allGenres = props.book.genres.concat(props.book.subgenres);

	return (
		<Fragment>
			<div className="book-block">
				<div className="cover">
					<Image
						src={getImgUrl(props.book.cover).url()}
						width={275}
						height={420}
					/>
				</div>
				<p>
					<strong>{props.book.title}</strong> di{" "}
					{props.book.author
						.map(singleAuthor => (
							<Link
								key={getKey()}
								href={`/autori/${encodeURIComponent(
									singleAuthor.slug?.current
								)}`}
							>
								<a>{singleAuthor.name}</a>
							</Link>
						))
						.reduce((a, b) => [a, ", ", b])}
					<br />
					{props.book.series && (
						<Fragment>
							<strong>Serie:</strong>{" "}
							{props.book.series.join(", ")}
							<br />
						</Fragment>
					)}
					<strong>Casa Editrice:</strong>{" "}
					<Link
						key={getKey()}
						href={`/case-editrici/${encodeURIComponent(
							props.book.publisher.slug?.current
						)}`}
					>
						<a>{props.book.publisher.name}</a>
					</Link>
					<br />
					<strong>
						{allGenres.length === 1 ? "Genere" : "Generi"}:
					</strong>{" "}
					{/* Create an url and text for every genre and use reduce as a join */}
					{allGenres
						.map(genre => (
							<Link
								key={getKey()}
								href={`/generi/${encodeURIComponent(
									genre.slug?.current
								)}`}
							>
								<a>{genre.name}</a>
							</Link>
						))
						.reduce((a, b) => [a, ", ", b])}
					<br />
					<strong>Formato:</strong> {props.book.format}
					<br />
					<strong>Pagine:</strong> {props.book.pages}
					<br />
					<Fragment>
						<strong>Valutazione:</strong>{" "}
						<Stars rating={props.book.rating} />
					</Fragment>
				</p>
				<blockquote className="synopsys">
					{props.book.synopsis}
				</blockquote>
			</div>
			<div className="bookBlockEnd"></div>
		</Fragment>
	);
}

const Stars = ({ rating }) => {
	return (
		<div className="stars" data-stars={rating}>
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
		</div>
	);
};
