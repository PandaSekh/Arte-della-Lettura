import { getPublishedPosts } from "../lib/postsAPI";
import RenderPosts from "../components/Homepage/RenderPosts";
import config from "../website.config.json";

export default function Index({ posts }) {
	return <RenderPosts posts={posts} />;
}

export function getStaticProps() {
	const posts = getPublishedPosts(0, config.postsPerPage);
	return { props: { posts } };
}
