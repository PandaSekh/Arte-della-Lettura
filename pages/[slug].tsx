import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import { getPublishedPostSlug, getPostBySlug } from "../lib/postsAPI";

const components = {
  InternalLink: dynamic(() => import("../components/UtilComponents/InternalLink")),
  Book: dynamic(() => import("../components/BookCard/Book")),
  Head: dynamic(() => import("next/head")),
  Image: dynamic(() => import("../components/Post/Image")),
  Stars: dynamic(() => import("../components/BookCard/Stars")),
  BoldTextWithStars: dynamic(() => import("../components/UtilComponents/BoldTextWithStars")),
};

export default function PostPage({
  source,
  frontMatter,
}: {
  source: MdxRemote.Source;
  frontMatter: {
    [key: string]: string;
  };
}): JSX.Element {
  const router = useRouter();
  const content = hydrate(source, { components });

  const DateUnderPost = dynamic(() => import("../components/Post/DateUnderPost"));

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
        <h1 className="text-center font-extralight">{frontMatter.title}</h1>
        <DateUnderPost date={frontMatter.publishedAt} />
        {content}
        <style>
          {`
					article details summary {
						cursor: pointer;
					}

					article details summary > * {
						display: inline;
					}
					article summary {list - style: none}
					article summary::-webkit-details-marker {display: none; }
					article details summary::before {
						content:"⚠️";
					}

					article ul > li::before {
						content: "";
						position: absolute;
						background-color: #d1d5db;
						border-radius: 50%;
						width: 0.375em;
						height: 0.375em;
						top: calc(0.875em - 0.1875em);
						left: 0.25em;
					}

					article ul > li {
						position: relative;
						padding-left: 1.75em;
					}

					article ul {
						margin-top: 1.25em;
						margin-bottom: 1.25em;
					}
				`}
        </style>
      </article>
    </>
  );
}

interface Props {
  props: {
    source: MdxRemote.Source;
    frontMatter: {
      [key: string]: unknown;
    };
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Props> {
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPublishedPostSlug();

  return {
    paths,
    fallback: false,
  };
};
