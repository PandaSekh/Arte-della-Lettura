/* eslint-disable react/jsx-props-no-spreading */
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
// import { getPublishedPostSlug, getPostBySlug } from "../lib/postsAPI";
import PostDataSingleton from "../dataAPIs/postsData";

const components = {
  InternalLink: dynamic(() => import("../components/UtilComponents/InternalLink")),
  Book: dynamic(() => import("../components/BookCard/Book")),
  Audiobook: dynamic(() => import("../components/BookCard/Audiobook")),
  Head: dynamic(() => import("next/head")),
  Image: dynamic(() => import("../components/Post/Image")),
  Stars: dynamic(() => import("../components/BookCard/Stars")),
  BoldTextWithStars: dynamic(() => import("../components/UtilComponents/BoldTextWithStars")),
  Spoiler: dynamic(() => import("../components/UtilComponents/SpoilerText")),
};

export default function PostPage({ source, frontMatter }: Props): JSX.Element {
  const router = useRouter();

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
        {/* {content} */}
        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: string;
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<{ props: Props }> {
  // const source = getPostBySlug(params.slug);
  const source = PostDataSingleton.getPostBySlug(params.slug);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = getPublishedPostSlug();
  const paths = PostDataSingleton.getInstance().getSlugs();

  return {
    paths,
    fallback: false,
  };
};
