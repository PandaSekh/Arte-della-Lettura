import { getImgUrl } from "../lib/sanityClient";
import Image from "next/image";
import { Fragment } from "react";

export default function Book(props) {
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
					{props.book.author.join(", ")}
					<br />
					<strong>Serie:</strong> {props.book.series?.join(", ")}
					<br />
					<strong>Casa Editrice:</strong> {props.book.publisher}
					<br />
					<strong>
						{props.book.genre.length === 1 ? "Genere" : "Generi"}:
					</strong>{" "}
					{props.book.genre.join(", ")}
					<br />
					<strong>Formato:</strong> {props.book.format}
					<br />
					<strong>Pagine:</strong> {props.book.pages}
					<br />
					<div>
						<strong>Valutazione:</strong>{" "}
						<Stars rating={props.book.rating} />
					</div>
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
