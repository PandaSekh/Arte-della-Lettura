import PortableText from "@sanity/block-content-to-react";

import { serializers } from "../lib/blockContentSerializer";
import { getPosts } from "../lib/cache";

export async function getStaticPaths() {
	const posts = await getPosts();
	const slugs = posts.map(post => post.slug.current);
	const paths = slugs.map(slug => ({
		params: { slug: slug.toString() },
	}));

	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const posts = await getPosts();
	const post = posts.filter(post => post.slug.current === params.slug)[0];
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
