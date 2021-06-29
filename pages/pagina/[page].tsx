import { GetStaticPaths } from "next";
import PostDataSingleton from "@fetchers/postsData";
import config from "website.config.json";
import Post from "@interfaces/Post"
import RenderPosts from "@components/Homepage/RenderPosts";
import Pagination from "@components/Pagination/Pagination";

export default function Index({
  posts,
  postsCount,
}: {
  posts: Array<Post>;
  postsCount: number;
}): JSX.Element {
  return (
    <div>
      <RenderPosts posts={posts} />
      <Pagination totalCount={postsCount} />
    </div>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { page: string };
}): Promise<{
  props: {
    posts: Post[];
    postsCount: number;
  };
}> => {
  const pageMinusOne = Number.parseInt(params.page, 10) - 1;
  const posts = PostDataSingleton.getInstance().getPosts(
    pageMinusOne * config.postsPerPage,
    pageMinusOne * config.postsPerPage + config.postsPerPage
  );
  const postsCount = PostDataSingleton.getInstance().getSlugs().length;

  return { props: { posts, postsCount } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsCount = PostDataSingleton.getInstance().getSlugs().length;
  const numberOfPages = Math.ceil(postsCount / config.postsPerPage);
  const paths = [];

  for (let page = 1; page <= numberOfPages; page++) {
    paths.push({ params: { page: String(page) } });
  }

  return {
    paths,
    fallback: false,
  };
};