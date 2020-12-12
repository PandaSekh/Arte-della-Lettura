import Head from "next/head";
import dynamic from "next/dynamic";
import { Fragment } from "react";

export default function Home(props) {
	const PostHomepage = dynamic(() => import("../components/PostHomepage"));
	const homepagePosts = props.posts.map(post => {
		return <PostHomepage post={post} key={post._id} />;
	});

	return (
		<Fragment>
			<Head>
				<meta
					name="description"
					content="override-me"
					key="description"
				/>
			</Head>

			<div className="content">
				{homepagePosts}
				{homepagePosts}
				{homepagePosts}
				{homepagePosts}
			</div>
		</Fragment>
	);
}

export async function getStaticProps() {
	const cache = await import("../lib/cache");
	const posts = await cache.getPosts();
	return {
		props: { posts: posts },
	};
}
