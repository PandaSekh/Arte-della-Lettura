import Head from "next/head";

import { getAllPosts } from "../lib/sanityClient";

import Navbar from "../components/Navbar";
import PostHomepage from "../components/PostHomepage";

export default function Home(props) {
	// const serializers = {
	// 	types: {
	// 		book: props => {
	// 			return <Book book={props.node} />;
	// 		},
	// 	},
	// 	marks: {
	// 		internalLink: ({ mark, children }) => {
	// 			const { slug = {} } = mark;
	// 			const href = `/${slug.current}`;
	// 			return <a href={href}>{children}</a>;
	// 		},
	// 	},
	// 	link: ({ mark, children }) => {
	// 		const { blank, href } = mark;
	// 		return blank ? (
	// 			<a href={href} target="_blank" rel="noopener">
	// 				{children}
	// 			</a>
	// 		) : (
	// 			<a href={href}>{children}</a>
	// 		);
	// 	},
	// };

	// <PortableText blocks={post.body} serializers={serializers} />;

	const homepagePosts = props.posts.map(post => {
		return <PostHomepage post={post} />;
	});

	return (
		<div>
			<Head>
				<title>Arte della Lettura</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Esempio" key="description" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
					key="viewport"
				/>
			</Head>

			<Navbar />

			<main>{homepagePosts}</main>
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getAllPosts();
	return {
		props: { posts: posts },
	};
}
