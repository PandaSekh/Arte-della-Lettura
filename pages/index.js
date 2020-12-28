import Head from "next/head";
import dynamic from "next/dynamic";
import { Fragment } from "react";

export default function Home(props) {
	const PostHomepage = dynamic(() => import("../components/PostHomepage"));
	const homepagePosts = props.posts.map(post => {
		return (
			<article key={post._id}>
				<PostHomepage post={post} />
			</article>
		);
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

			<div className="content">{homepagePosts}</div>
		</Fragment>
	);
}

export function getStaticProps() {
	const posts = require("../cache/home.json");
	return {
		props: { posts: posts },
	};
}
