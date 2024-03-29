import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import DataSingleton, {
  BookWithTitleSlugAuthorRating,
} from "@fetchers/postsData";
import RenderPosts from "@components/Homepage/RenderPosts";
import { stringToSlug } from "@lib/utils";
import { ReactElement } from "react";

export default function Index({
  posts,
  authorParam,
}: {
  posts: {
    content: string;
    data: {
      [_key: string]: unknown;
    };
    filePath: string;
  }[];
  authorParam: string;
}): ReactElement | null {
  return (
    <div className="mx-auto">
      <h2 className="text-center mx-auto">Recensioni Libri di {authorParam}</h2>
      <RenderPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps({
  params,
}: {
  params: Params;
}): Promise<Props> {
  const { author } = params;
  const data: Array<BookWithTitleSlugAuthorRating> =
    DataSingleton.getInstance().getAuthorBookTitleSlug(author);
  // from the book authors, get the name (NOT SLUG) of the author we're referring in this page
  const authorParam = data[0].author.find(
    (singleAuthor) => stringToSlug(singleAuthor) === author
  );

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
