import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
// import InternalLink from "../components/UtilComponents/InternalLink";
import DateUnderPost from "../components/Post/DateUnderPost";
// import Book from "../components/BookCard/Book";
// import CustomImage from "../components/Post/Image";
import { getPublishedPostSlug, getPostBySlug } from "../lib/postsAPI";
import { GetStaticPaths } from "next";
import { MdxRemote } from "next-mdx-remote/types";

const components = {
	InternalLink: dynamic(() =>
		import("../components/UtilComponents/InternalLink")
	),
	Book: dynamic(() => import("../components/BookCard/Book")),
	Head,
	Image: dynamic(() => import("../components/Post/Image")),
	Stars: dynamic(() => import("../components/BookCard/Stars")),
	BoldTextWithStars: dynamic(() =>
		import("../components/UtilComponents/BoldTextWithStars")
	),
};

export default function PostPage({ source, frontMatter }: {
	source: MdxRemote.Source, frontMatter: {
		[key: string]: any;
	}
}) {
	const router = useRouter();
	const content = hydrate(source, { components });
	return (
		<>
			<NextSeo
				title={frontMatter.title}
				openGraph={{
					title: frontMatter.title,
					url: router.pathname,
					type: "article",
					article: {
						publishedTime: frontMatter.publishedAt,
						modifiedTime: frontMatter.updatedAt,
						authors: ["Alessio Franceschi"],
					},
				}}
			/>
			<article className="w-9/12 mx-auto my-0">
				<h1 className="text-center font-extralight">
					{frontMatter.title}
				</h1>
				<DateUnderPost date={frontMatter.publishedAt} />
				{content}
			</article>
		</>
	);
}

export const getStaticProps = async ({ params }: {
	params: {
		slug: string;
	}
}) => {
	const source = getPostBySlug(params.slug);

	const { content, data } = matter(source);

	const mdxSource = await renderToString(content, {
		components,
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getPublishedPostSlug();

	return {
		paths,
		fallback: false,
	};
};
