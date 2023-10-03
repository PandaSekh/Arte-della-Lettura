import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import DataSingleton from "@fetchers/postsData";
import RenderPosts from "@components/Homepage/RenderPosts";
import Book from "@interfaces/Book";
import { stringToSlug } from "@lib/utils";
import { ReactElement } from "react";

export default function Index({
  posts,
  genreParam,
}: {
  posts: {
    content: string;
    data: {
      [_key: string]: unknown;
    };
    filePath: string;
  }[];
  genreParam: string;
}): ReactElement | null {
  return (
    <div className="mx-auto">
      <h2 className="text-center mx-auto">Recensioni Libri {genreParam}</h2>
      <RenderPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps({
  params,
}: {
  params: Params;
}): Promise<Props> {
  const { genre } = params;
  const data: Array<Book> = DataSingleton.getInstance().getBookFromGenreSlug(
    genre as string
  );
  // from the book authors, get the name (NOT SLUG) of the author we're referring in this page
  const genreParam = data[0].genres.find(
    (genreLoop) => stringToSlug(genreLoop) === genre
  );
  const posts =
    DataSingleton.getInstance().getFullBooksReviewsFromGenreSlug(genre);
  return { props: { posts, genreParam } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const genres = DataSingleton.getInstance().getGenresSlug();
  const paths = genres.map((genre) => {
    return { params: { genre } };
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
      };
      filePath: string;
    }[];
    genreParam: string | undefined;
  };
}

interface Params extends ParsedUrlQuery {
  genre: string;
}
