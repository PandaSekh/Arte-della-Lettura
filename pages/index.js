import Head from "next/head";

import getPosts from "../lib/postsContainer";

import { getImgUrl } from "../lib/sanityClient";

import PortableText from "@sanity/block-content-to-react";
import Book from "../components/Book";

export default function Home(props) {
	const serializers = {
		types: {
			book: props => {
				console.log("book", props);
				return <Book book={props.node} />;
			},
			reference: props => {
				console.log(props);
				if (props._type === "book") {
					console.log(props);
					<Book book={props.node} />;
				}
			},
		},
		marks: {
			internalLink: ({ mark, children }) => {
				const { slug = {} } = mark;
				const href = `/${slug.current}`;
				return <a href={href}>{children}</a>;
			},
		},
	};

	const postsToDisplay = props.posts.map(post => {
		return (
			<div key={post._id}>
				<PortableText blocks={post.body} serializers={serializers} />
			</div>
		);
	});

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Esempio" key="description" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
					key="viewport"
				/>
			</Head>
			<p>Index</p>
			<p>{postsToDisplay}</p>
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();
	// console.log(posts);
	// console.log(posts[0].body);
	// posts.forEach(post => {
	// 	console.log("All: ", post);
	// 	console.log("Body: ", post.body);
	// });
	return {
		props: { posts: posts },
	};
}
