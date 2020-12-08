import { serializers } from "../lib/blockContentSerializer";

import PortableText from "@sanity/block-content-to-react";
import Link from "next/link";
import Image from "next/image";
import { getImgUrl } from "../lib/sanityClient";

export default function PostHomepage(props) {
	console.log("post: ", props.post);
	return (
		<div className="single-post-homepage">
			<Link href={`/${encodeURIComponent(props.post.slug.current)}`}>
				<a>
					<h3>{props.post.title}</h3>
				</a>
			</Link>
			<Image
				src={getImgUrl(props.post.mainImage).width(300).url()}
				width={300}
				height={450}
			/>
			{/* <PortableText blocks={props.post.body} serializers={serializers} /> */}
		</div>
	);
}
