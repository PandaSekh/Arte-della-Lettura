import Link from "next/link";
import Image from "next/image";
import { getImgUrl } from "../lib/sanityClient";

export default function PostHomepage(props) {
	const book = props.post.body.find(block => {
		return block._type === "book";
	});

	return (
		<div className="single-post-homepage">
			<Link href={`/${encodeURIComponent(props.post.slug.current)}`}>
				<a>
					<h3 className="homepage-title text-center">
						{props.post.title}
					</h3>
				</a>
			</Link>
			<div className="grid m-auto">
				<Link href={`/${encodeURIComponent(props.post.slug.current)}`}>
					<a>
						<Image
							src={getImgUrl(props.post.mainImage)
								// .width(340)
								// .height(500)
								.url()}
							width={340}
							height={500}
							className="m-auto"
							alt={`Copertina ${
								book.title ? book.title : "libro"
							}`}
						/>
					</a>
				</Link>
			</div>
			<p>
				{props.post.excerpt
					? "Breve descrizione"
					: book.synopsis.slice(0, 400)}
				...
			</p>
		</div>
	);
}
