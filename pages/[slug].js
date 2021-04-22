// import PortableText from "@sanity/block-content-to-react";
// import { serializers } from "../lib/blockContentSerializer";
// import DateUnderPost from "../components/DateUnderPost";

// export async function getStaticPaths() {
// 	const posts = require("../cache/posts.json");
// 	const slugs = posts.map(post => post.slug.current);
// 	const paths = slugs.map(slug => ({
// 		params: { slug: slug.toString() },
// 	}));

// 	return {
// 		paths: paths,
// 		fallback: false,
// 	};
// }

// export async function getStaticProps({ params }) {
// 	const posts = require("../cache/posts.json");
// 	const post = posts.filter(post => post.slug.current === params.slug)[0];
// 	return { props: { post } };
// }

// export default function Post({ post }) {
// 	return (
// 		<article>
// 			<h1 className="postTitle">{post.title}</h1>
// 			<DateUnderPost date={post.publishedAt} />
// 			<PortableText blocks={post.body} serializers={serializers} />
// 		</article>
// 	);
// }

import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import InternalLink from "../components/InternalLink";
import DateUnderPost from "../components/DateUnderPost";
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils";
import Book from "../components/Book";
import CustomImage from "../components/Post/Image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
	InternalLink: InternalLink,
	// It also works with dynamically-imported components, which is especially
	// useful for conditionally loading components for certain routes.
	// See the notes in README.md for more details.
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
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await renderToString(content, {
		components,
		// Optionally pass remark/rehype plugins
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
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map(path => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map(slug => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
