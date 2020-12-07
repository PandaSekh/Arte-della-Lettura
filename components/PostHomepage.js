import { serializers } from "../lib/blockContentSerializer";

import PortableText from "@sanity/block-content-to-react";
import Link from "next/link";

export default function PostHomepage(props) {
	console.log(props.post.slug.current);
	return (
		<div>
			<Link href={`/${encodeURIComponent(props.post.slug.current)}`}>
				<a>
					<h3>{props.post.title}</h3>
				</a>
			</Link>

			<PortableText blocks={props.post.body} serializers={serializers} />
		</div>
	);
}
