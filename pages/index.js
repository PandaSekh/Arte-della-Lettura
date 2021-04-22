// WITH SANITY

// import Head from "next/head";
// import dynamic from "next/dynamic";
// import { Fragment } from "react";

// export default function Home(props) {
// 	const PostHomepage = dynamic(() => import("../components/PostHomepage"));
// 	const homepagePosts = props.posts.map(post => {
// 		return (
// 			<article key={post._id}>
// 				<PostHomepage post={post} />
// 			</article>
// 		);
// 	});

// 	return (
// 		<Fragment>
// 			<Head>
// 				<meta
// 					name="description"
// 					content="override-me"
// 					key="description"
// 				/>
// 			</Head>

// 			<div className="content">{homepagePosts}</div>
// 		</Fragment>
// 	);
// }

// export function getStaticProps() {
// 	const posts = require("../cache/home.json");
// 	return {
// 		props: { posts: posts },
// 	};
// }

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils";
import getKey from "../lib/keyGen"
import PostHomepage from "../components/PostHomepage";

export default function Index({ posts }) {
	return (
		<div className="content">
			{posts.map(post => (
				<article key={getKey()}>
					<PostHomepage post={post.content} data={post.data} />
				</article>
			))}
		</div>
	);
}

export function getStaticProps() {
	const posts = postFilePaths.slice(0, 10).map(filePath => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
		const { content, data } = matter(source);

		return {
			content,
			data,
			filePath,
		};
	});

	return { props: { posts } };
}
