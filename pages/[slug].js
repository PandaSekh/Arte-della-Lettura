import { getPost, getAllPostsSlugs } from "../lib/sanityClient";
import PortableText from "@sanity/block-content-to-react";

import { serializers } from "../lib/blockContentSerializer";
import { getPosts } from "../lib/cache";

export async function getStaticPaths() {
	// const slugs = await getAllPostsSlugs();
	const posts = await getPosts();
	const slugs = posts.map(post => post.slug.current);
	// console.log("slugs: ", slugs);
	const paths = slugs.map(slug => ({
		params: { slug: slug.toString() },
	}));

	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// const post = await getPost(params.slug);
	const posts = await getPosts();
	const post = posts.filter(post => post.slug.current === params.slug)[0];
	// console.log("post title: ", post.title);
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
