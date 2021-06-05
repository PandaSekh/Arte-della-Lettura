import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
// import { getFullBooksFromAuthorSlug, getAuthorsSlug, getAuthorBookTitleSlug } from "../../lib/archivesAPI";
import RenderPosts from "../../components/Homepage/RenderPosts";
// import BookTitleSlug from "../../interfaces/BookTitleSlug";
import stringToSlug from "../../lib/stringToSlug";

import DataSingleton, { BookWithTitleSlugAuthorRating } from "../../dataAPIs/postsData";

export default function Index({
  posts,
  authorParam,
}: {
  posts: {
    content: string;
    data: {
      [key: string]: unknown;
    };
    filePath: string;
  }[];
  authorParam: string;
}): JSX.Element {
  return (
    <div className="mx-auto">
      <h2 className="text-center mx-auto">Recensioni Libri di {authorParam}</h2>
      <RenderPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps({ params }: { params: Params }): Promise<Props> {
  const { author } = params;
  const data: Array<BookWithTitleSlugAuthorRating> = DataSingleton.getInstance().getAuthorBookTitleSlug(author);
  // from the book authors, get the name (NOT SLUG) of the author we're referring in this page
  const authorParam = data[0].author.find((singleAuthor) => stringToSlug(singleAuthor) === author);

  const posts = DataSingleton.getInstance().getFullBooksFromAuthorSlug(author);

  return { props: { posts, authorParam } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const authors = DataSingleton.getInstance().getAuthorSlugs();
  const paths = authors.map((author) => {
    return { params: { author: String(author) } };
  });

  return {
    paths,
    fallback: false,
  };
};

interface Props {
  props: {
    posts: {
      data: {
        [key: string]: any;
      };
      filePath: string;
    }[];
    authorParam: string | undefined;
  };
}

interface Params extends ParsedUrlQuery {
  author: string;
}
