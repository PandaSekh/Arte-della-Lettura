import Link from "next/link";
import Image from "next/image";
import { getImgUrl } from "../lib/sanityClient";

import dynamic from "next/dynamic";

export default function PostHomepage(props) {
	const DateUnderPost = dynamic(() => import("./DateUnderPost"));
	const ReadMore = dynamic(() => import("./ReadMore"));

	const book = props.post.body.find(block => {
		return block._type === "book";
	});

	return (
		<div className="singlePostHomepage">
			<Link href={`/${encodeURIComponent(props.post.slug.current)}`}>
				<a>
					<h3 className="homepageTitle">{props.post.title}</h3>
				</a>
			</Link>
			<DateUnderPost date={props.post.publishedAt} />
			<div className="homePageImage">
				<Link href={`/${encodeURIComponent(props.post.slug.current)}`}>
					<a>
						<Image
							src={getImgUrl(props.post.mainImage)
								// .width(400)
								// .height(560)
								.quality(75)
								.auto("format")
								.url()}
							width={300}
							height={460}
							// width={340}
							// height={500}
							alt={`Copertina ${
								book.title ? book.title : "libro"
							}`}
						/>
					</a>
				</Link>
			</div>
			<p>
				{props.post.excerpt
					? props.post.excerpt
					: book.synopsis.slice(0, 400)}
				...
			</p>
			<ReadMore slug={props.post.slug.current} />
		</div>
	);
}
