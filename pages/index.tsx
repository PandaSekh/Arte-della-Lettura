import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import PostDataSingleton from "@fetchers/postsData";
import RenderPosts from "@components/Homepage/RenderPosts";
import config from "website.config.json";
import SearchSchema from "@schemas/SearchSchema";
import { ReactElement } from "react";

export default function Index({
  posts,
  postsCount,
}: {
  posts: {
    content: string;
    data: {
      [_key: string]: unknown;
    };
    filePath: string;
  }[];
  postsCount: number;
}): ReactElement | null {
  const Pagination = dynamic(
    () => import("../components/Pagination/Pagination")
  );

  return (
    <div>
      <RenderPosts posts={posts} />
      <Pagination totalCount={postsCount} />
      <SearchSchema />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = PostDataSingleton.getInstance().getPosts(
    0,
    config.postsPerPage
  );
  const postsCount = PostDataSingleton.getInstance().getSlugs().length;

  return { props: { posts, postsCount } };
};
