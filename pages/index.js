import { getPublishedPosts } from "../lib/postsAPI";
import getKey from "../lib/keyGen";
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
	const posts = getPublishedPosts(0, 11);

	return { props: { posts } };
}
