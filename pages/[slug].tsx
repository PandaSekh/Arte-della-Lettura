/* eslint-disable react/jsx-props-no-spreading */
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import RelatedPost from "@interfaces/RelatedPost";
import Comment from "@interfaces/Comment";
import ArticleSchema from "@schemas/ArticleSchema";
import DateUnderPost from "@components/Post/DateUnderPost";

const components = {
  InternalLink: dynamic(
    () => import("@components/UtilComponents/InternalLink")
  ),
  Audiobook: dynamic(() => import("@components/BookCard/Audiobook")),
  Head: dynamic(() => import("next/head")),
  Image: dynamic(() => import("@components/Post/Image")),
  Stars: dynamic(() => import("@components/Stars/Stars")),
  BoldTextWithStars: dynamic(
    () => import("@components/Stars/BoldTextWithStars")
  ),
  Spoiler: dynamic(() => import("@components/UtilComponents/SpoilerText")),
  Book: dynamic(() => import("@components/BookCard/Book")),
};

export default function PostPage({
  source,
  frontMatter,
  relatedPosts,
  commentsData,
}: Props): JSX.Element {
  const router = useRouter();

  const CommentBlock = dynamic(() => import("@components/Comments/CommentBlock"));
  const RelatedPosts = dynamic(() => import("@components/RelatedPosts/RelatedPosts"));
  // const EmojiBlock = dynamic(() => import("@components/EmojiBlock/EmojiBlock"));

  return (
    <div>
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          title: frontMatter.title,
          url: router.asPath,
          type: "article",
          article: {
            publishedTime: frontMatter.publishedAt,
            modifiedTime: frontMatter.updatedAt,
            authors: ["Alessio Franceschi"],
          },
        }}
      />
      <ArticleSchema postMetadata={frontMatter} />
      <article className="w-10/12 mx-auto my-0">
        <h1 className="text-center font-extralight">{frontMatter.title}</h1>
        <DateUnderPost date={frontMatter.publishedAt} />
        <meta content={frontMatter.publishedAt} />
        <MDXRemote {...source} components={components} />
      </article>
      {/* <EmojiBlock slug={frontMatter.slug} /> */}
      <RelatedPosts posts={relatedPosts} />
      <CommentBlock slug={frontMatter.slug} comments={commentsData} />
    </div>
  );
}

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: string;
  };
  relatedPosts: Array<RelatedPost>;
  commentsData: Array<Comment> | null;
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<{ props: Props }> {
  const source = (await import("@fetchers/postsData")).default.getPostBySlug(params.slug);
  const comments = await (await import("@fetchers/getComments")).default(params.slug);
  const relatedPosts = (await import("@fetchers/getRelatedPosts")).default(params.slug);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      relatedPosts,
      commentsData: comments,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await import("@fetchers/postsData")).default.getInstance().getSlugs();

  return {
    paths,
    fallback: false,
  };
};
