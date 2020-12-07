import { getPost, getAllPostsSlugs } from "../lib/sanityClient";
import PortableText from "@sanity/block-content-to-react";

import { serializers } from "../lib/blockContentSerializer";

export async function getStaticPaths() {
	const slugs = await getAllPostsSlugs();
	const paths = slugs.map(slug => ({
		params: { slug: slug.slug.current.toString() },
	}));

	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getPost(params.slug);
	return { props: { post } };
}

export default function Post({ post }) {
	return (
		<div>
			<h3>{post.title}</h3>
			<PortableText blocks={post.body} serializers={serializers} />
		</div>
	);
}
