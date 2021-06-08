/* eslint-disable react/jsx-props-no-spreading */
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import PostDataSingleton from "../dataFetchers/postsData";
import ArticleSchema from "../schemas/ArticleSchema";
import RelatedPostsSingleton, { RelatedPost } from "../dataFetchers/relatedPostsData";
import RelatedPosts from "../components/RelatedPosts/RelatedPosts";
import CommentBlock from "../components/comments/CommentBlock";
import Comment from "../interfaces/Comment";

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

export default function PostPage({ source, frontMatter, relatedPosts, commentsData }: Props): JSX.Element {
  const router = useRouter();
  const DateUnderPost = dynamic(() => import("../components/Post/DateUnderPost"));

  return (
    <>
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
      <RelatedPosts posts={relatedPosts} />
      <CommentBlock slug={frontMatter.slug} comments={commentsData} />
    </>
  );
}

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: string;
  };
  relatedPosts: Array<RelatedPost>;
  commentsData: Array<Comment>;
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<{ props: Props }> {
  const source = PostDataSingleton.getPostBySlug(params.slug);

  const relatedPosts = RelatedPostsSingleton.getInstance().getRelatedPosts(params.slug);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  const comments = await fetch(`http://localhost:3000/api/getComments/${params.slug}`).then((res) => res.json());
  console.log("Comments: ", comments);
  const t = JSON.parse(comments);
  console.log("parse: ", t);

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
  const paths = PostDataSingleton.getInstance().getSlugs();

  return {
    paths,
    fallback: false,
  };
};
