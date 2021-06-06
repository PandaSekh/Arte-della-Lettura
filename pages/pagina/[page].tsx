import { GetStaticPaths } from "next";
import config from "../../website.config.json";
import RenderPosts from "../../components/Homepage/RenderPosts";
import PostDataSingleton from "../../dataAPIs/postsData";
import Pagination from "../../components/Pagination/Pagination";

export default function Index({ posts, postsCount }: { posts: Array<Post>; postsCount: number }): JSX.Element {
  return (
    <>
      <RenderPosts posts={posts} />
      <Pagination totalCount={postsCount} />
    </>
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
  const posts = PostDataSingleton.getInstance().getPosts(pageMinusOne, pageMinusOne + config.postsPerPage);

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

interface Post {
  content: string;
  data: {
    [key: string]: unknown;
  };
  filePath: string;
}
