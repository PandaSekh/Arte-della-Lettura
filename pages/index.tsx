import { GetStaticProps } from "next";
import { getPublishedPosts } from "../lib/postsAPI";
import RenderPosts from "../components/Homepage/RenderPosts";
import config from "../website.config.json";

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
}) {
  return <RenderPosts posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPublishedPosts(0, config.postsPerPage);
  return { props: { posts } };
};
