import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import DataSingleton from "@fetchers/postsData";
import RenderPosts from "@components/Homepage/RenderPosts";
import Book from "@interfaces/Book";
import { ReactElement } from "react";

export default function Index({
  posts,
  publisherParam,
}: {
  posts: {
    content: string;
    data: {
      [_key: string]: unknown;
    };
    filePath: string;
  }[];
  publisherParam: string;
}): ReactElement | null {
  return (
    <div className="mx-auto">
      <h2 className="text-center mx-auto">
        Recensioni Libri di {publisherParam}
      </h2>
      <RenderPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps({
  params,
}: {
  params: Params;
}): Promise<Props> {
  const { ce } = params;
  const data: Array<Book> = DataSingleton.getInstance().getBookFromEditorSlug(
    ce as string
  );
  // from the book authors, get the name (NOT SLUG) of the author we're referring in this page
  const publisherParam = data[0].publisher;
  const posts =
    DataSingleton.getInstance().getFullBooksReviewsFromEditorSlug(ce);
  return { props: { posts, publisherParam } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const publishers = DataSingleton.getInstance().getCaseEditriciSlug();
  const paths = publishers.map((publisher) => {
    return { params: { ce: publisher } };
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
    publisherParam: string | undefined;
  };
}

interface Params extends ParsedUrlQuery {
  ce: string;
}
