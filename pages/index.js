import Head from "next/head";

import getPosts from "../lib/postsContainer";

export default function Home(props) {
	const postsToDisplay = props.posts.map(post => {
		return (
			<div key={post._id}>
				Id: {post._id}
				<p>Title: {post.title}</p>
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
			<p>HEllo</p>
			<p>{postsToDisplay}</p>
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();
	console.log(posts);
	return {
		props: { posts: posts },
	};
}
