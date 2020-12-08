import Head from "next/head";

import { getAllPosts } from "../lib/sanityClient";

import Navbar from "../components/Navbar";
import PostHomepage from "../components/PostHomepage";
import { getPosts } from "../lib/cache";

import { Fragment } from "react";


export default function Home(props) {
	const homepagePosts = props.posts.map(post => {
		return <PostHomepage post={post} key={post._id} />;
	});

	return (
		<Fragment>
			<Head>
				<meta name="description" content="override" key="description" />
			</Head>

			{/* <Navbar /> */}

			<div className="posts">{homepagePosts}</div>
			<div className="sidebar">Sidebar</div>
		</Fragment>
	);
}

export async function getStaticProps() {
	// const posts = await getAllPosts();
	// return {
	// 	props: { posts: posts },
	// };
	const posts = await getPosts();
	const again = await getPosts();
	return {
		props: { posts: posts },
	};
}
