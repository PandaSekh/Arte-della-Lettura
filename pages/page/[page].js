import { getPublishedPostPath, getPublishedPosts } from "../../lib/postsAPI";
import config from "../../website.config.json";
import RenderPosts from "../../components/Homepage/RenderPosts";

export default function Index({ posts }) {
	return <RenderPosts posts={posts} />;
}

export const getStaticProps = async ({ params }) => {
	const pageMinusOne = params.page - 1;
	const posts = getPublishedPosts(
		pageMinusOne,
		pageMinusOne + config.postsPerPage
	);
	return { props: { posts } };
};

export const getStaticPaths = async () => {
	const postsCount = getPublishedPostPath().length;
	const numberOfPages = Math.ceil(postsCount / config.postsPerPage);
	const paths = [];

	for (let page = 1; page <= numberOfPages; page++) {
		paths.push({ params: { page: String(page) } });
	}

	return {
		paths,
		fallback: false,
	};
};
