import { getPublishedPosts } from "../lib/postsAPI";
import RenderPosts from "../components/Homepage/RenderPosts";
import config from "../website.config.json";
import { GetStaticProps } from "next";

interface Posts {
	posts:
	{
		content: string
		data: {
			[key: string]: any;
		}
		filePath: string
	}
}


export default function Index({ posts }: Posts) {
	return <RenderPosts posts={ posts } />;
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = getPublishedPosts(0, config.postsPerPage);
	return { props: { posts } };
}
