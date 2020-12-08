import Head from "next/head";

import { getPosts } from "../lib/cache";

import { Fragment } from "react";

export default function Home(props) {
	const PostHomepage = dynamic(() => import("../components/PostHomepage"));

	const homepagePosts = props.posts.map(post => {
		return <PostHomepage post={post} key={post._id} />;
	});

	return (
		<Fragment>
			<Head>
				<meta name="description" content="override" key="description" />
			</Head>

			<div className="posts">
				{homepagePosts}
				{homepagePosts}
				{homepagePosts}
				{homepagePosts}
			</div>
			<div className="sidebar">Sidebar</div>
		</Fragment>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();
	return {
		props: { posts: posts },
	};
}
