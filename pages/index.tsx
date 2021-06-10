import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import RenderPosts from "../components/Homepage/RenderPosts";
import config from "../website.config.json";
import PostDataSingleton from "../dataFetchers/postsData";

export default function Index({
  posts,
  postsCount,
}: {
  posts: {
    content: string;
    data: {
      [key: string]: unknown;
    };
    filePath: string;
  }[];
  postsCount: number;
}): JSX.Element {
  const Pagination = dynamic(() => import("../components/Pagination/Pagination"));

  return (
    <>
      <RenderPosts posts={posts} />
      <Pagination totalCount={postsCount} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = PostDataSingleton.getInstance().getPosts(0, config.postsPerPage);
  const postsCount = PostDataSingleton.getInstance().getSlugs().length;

  return { props: { posts, postsCount } };
};
