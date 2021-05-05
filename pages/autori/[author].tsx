import { getPublishedPostPath, getPublishedPosts } from "../../lib/postsAPI";
import { getFullBooksFromAuthorSlug, getAuthorsSlug, getAuthorBookTitleSlug } from "../../lib/archivesAPI";
import config from "../../website.config.json";
import RenderPosts from "../../components/Homepage/RenderPosts";
import { GetStaticPaths } from "next";
import BookTitleSlug from "../../interfaces/BookTitleSlug";
import keygen from "../../lib/keyGen"
import Link from "next/link";
import stringToSlug from "../../lib/stringToSlug";

export default function Index({ posts, authorParam }: {
  posts: {
    content: string
    data: {
      [key: string]: any;
    }
    filePath: string
  }[], authorParam: string
}) {
  return (
    <div className="mx-auto">
      <h2 className="text-center mx-auto">Recensioni Libri di {authorParam}</h2>
      <RenderPosts posts={posts} />
    </div>
  );
}

export const getStaticProps = async ({ params }: { params: { author: string } }) => {
  const data: Array<BookTitleSlug> = getAuthorBookTitleSlug(params.author);
  // from the book authors, get the name (NOT SLUG) of the author we're referring in this page
  const authorParam = data[0].author.find(author => stringToSlug(author) === params.author);

  const posts = getFullBooksFromAuthorSlug(params.author);
  
  return { props: { posts, authorParam } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = getAuthorsSlug();
  const paths = authors.map(author => { return { params: { author: String(author) } } })

  return {
    paths,
    fallback: false,
  };
};
