import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import InternalLink from "../components/InternalLink";
import DateUnderPost from "../components/DateUnderPost";
import Book from "../components/BookCard/Book";
import CustomImage from "../components/Post/Image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getPublishedPostSlug, getPostBySlug } from "../lib/postsAPI";

const components = {
	InternalLink: InternalLink,
	Book: Book,
	Head,
	Image: CustomImage,
};

export default function PostPage({ source, frontMatter }) {
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
			<article>
				<h1 className="postTitle">{frontMatter.title}</h1>
				<DateUnderPost date={frontMatter.publishedAt} />
				<div>{content}</div>
			</article>
		</>
	);
}

export const getStaticProps = async ({ params }) => {
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

export const getStaticPaths = async () => {
	const paths = getPublishedPostSlug();

	return {
		paths,
		fallback: false,
	};
};
