import { getPublishedPostPath, getPublishedPosts } from "../../lib/postsAPI";
import { getAuthorsSlug } from "../../lib/archivesAPI";
import config from "../../website.config.json";
import RenderPosts from "../../components/Homepage/RenderPosts";
import { GetStaticPaths } from "next";

export default function Index({ posts }: {
  posts: {
    content: string
    data: {
      [key: string]: any;
    }
    filePath: string
  }[]
}) {
  return <RenderPosts posts={posts} />;
}

export const getStaticProps = async ({ params }: { params: { page: string } }) => {
  const pageMinusOne = Number.parseInt(params.page) - 1;
  const posts = getPublishedPosts(
    pageMinusOne,
    pageMinusOne + config.postsPerPage
  );
  return { props: { posts } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = getAuthorsSlug();
  console.log(authors)
  const paths = authors.map(author => { return { params: { author: String(author) } } })


  return {
    paths,
    fallback: false,
  };
};
