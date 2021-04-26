import { getPublishedPostPath, getPublishedPosts } from "../../lib/postsAPI";
import config from "../../website.config.json";
import RenderPosts from "../../components/Homepage/RenderPosts";
import { GetStaticPaths } from "next";

export default function Index({ posts }: {
	posts: {
		content: string
		data: {
			[key: string]: any;
		}
		filePath: string
	}[]
}) {
	return <RenderPosts posts={posts} />;
}

export const getStaticProps = async ({ params }: { params: { page: string } }) => {
	const pageMinusOne = Number.parseInt(params.page) - 1;
	const posts = getPublishedPosts(
		pageMinusOne,
		pageMinusOne + config.postsPerPage
	);
	return { props: { posts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
