import { GetStaticPaths } from "next";
// import { getPublishedPostPath, getPublishedPosts } from "../../lib/postsAPI";
import config from "../../website.config.json";
import RenderPosts from "../../components/Homepage/RenderPosts";
import PostDataSingleton from "../../dataAPIs/postsData";

export default function Index({
  posts,
}: {
  posts: {
    content: string;
    data: {
      [key: string]: any;
    };
    filePath: string;
  }[];
}): JSX.Element {
  return <RenderPosts posts={posts} />;
}

export const getStaticProps = async ({
  params,
}: {
  params: { page: string };
}): Promise<{
  props: {
    posts: {
      content: string;
      data: {
        [key: string]: unknown;
      };
      filePath: string;
    }[];
  };
}> => {
  const pageMinusOne = Number.parseInt(params.page, 10) - 1;
  // const posts = getPublishedPosts(pageMinusOne, pageMinusOne + config.postsPerPage);
  const posts = PostDataSingleton.getInstance().getPosts(pageMinusOne, pageMinusOne + config.postsPerPage);
  return { props: { posts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const postsCount = getPublishedPostPath().length;
  // console.log("Generating paths");
  const postsCount = PostDataSingleton.getInstance().getSlugs().length;
  // console.log("postsCount: ", postsCount);
  const numberOfPages = Math.ceil(postsCount / config.postsPerPage);
  // console.log("numberOfPages: ", numberOfPages);
  const paths = [];

  for (let page = 1; page <= numberOfPages; page++) {
    // console.log("Paths loop num: ", page);
    paths.push({ params: { page: String(page) } });
  }

  // console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
};
