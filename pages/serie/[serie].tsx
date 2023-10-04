import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import DataSingleton from "@fetchers/postsData";
import Book from "@interfaces/Book";
import { stringToSlug } from "@lib/utils";
import RenderPosts from "@components/Homepage/RenderPosts";
import { ReactElement } from "react";

export default function Index({
  posts,
  seriesParam,
}: {
  posts: {
    content: string;
    data: {
      [_key: string]: unknown;
    };
    filePath: string;
  }[];
  seriesParam: string;
}): ReactElement | null {
  return (
    <div className="mx-auto">
      <h2 className="text-center mx-auto">
        Recensioni Libri della serie {seriesParam}
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
  const { serie } = params;
  const data: Array<Book> = DataSingleton.getInstance().getBookFromSerieSlug(
    serie as string
  );
  // from the book authors, get the name (NOT SLUG) of the author we're referring in this page
  const seriesParam = data[0].series.find(
    (serieLoop) => stringToSlug(serieLoop.series) === serie
  )?.series;
  const posts = DataSingleton.getInstance().getFullBooksReviewsFromSerieSlug(
    serie as string
  );
  return { props: { posts, seriesParam } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const series = DataSingleton.getInstance().getSeriesSlug();
  const paths = series.map((serie) => {
    return { params: { serie } };
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
    seriesParam: string | undefined;
  };
}

interface Params extends ParsedUrlQuery {
  series: string;
}
