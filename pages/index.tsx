import { GetStaticProps } from "next";
import RenderPosts from "../components/Homepage/RenderPosts";
import config from "../website.config.json";
import PostDataSingleton from "../dataAPIs/postsData";
import Pagination from "../components/Pagination/Pagination";

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
  return (
    <>
      <button
        type="button"
        onClick={() => {
          fetch("http://localhost:3000/api/getComments");
        }}
      >
        FECTh
      </button>
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
