import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getDateFrom_MM_DD_YYYY } from "./timeUtils";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

export function getPostBySlug(slug: string) {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  return fs.readFileSync(postFilePath);
}

export function getPublishedPostPath() {
  return postFilePaths.filter((filePath) => /\.mdx?$/.test(filePath));
}

export function getPublishedPostSlug() {
  return getPublishedPostPath()
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
}

export function getPublishedPosts(sliceFrom: number | undefined = undefined, sliceTo: number | undefined = undefined) {
  return getPublishedPostPath()
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    })
    .filter((post) => post)
    .sort(
      (a: PostWithFilepath, b: PostWithFilepath) =>
        getDateFrom_MM_DD_YYYY(b.data.publishedAt).getTime() - getDateFrom_MM_DD_YYYY(a.data.publishedAt).getTime()
    )
    .slice(sliceFrom, sliceTo);
}

export function getPublishedPostsForHomepage(
  sliceFrom: number | undefined = undefined,
  sliceTo: number | undefined = undefined
): { data: { [key: string]: any }; filePath: string }[] {
  return getPublishedPostPath()
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { data } = matter(source);

      return {
        data,
        filePath,
      };
    })
    .filter((post) => post)
    .sort(
      (a, b) =>
        getDateFrom_MM_DD_YYYY(b.data.publishedAt).getTime() - getDateFrom_MM_DD_YYYY(a.data.publishedAt).getTime()
    )
    .slice(sliceFrom, sliceTo);
}

export function getPostsForHomepageBySlug(slug: string): { data: { [key: string]: any }; filePath: string } {
  const filePath =
    getPublishedPostPath()
      .map((path) => path.replace(/\.mdx?$/, ""))
      .find((filePath) => filePath === slug) || "";
  const source = fs.readFileSync(path.join(POSTS_PATH, `${filePath}.mdx`));
  const { data } = matter(source);

  return {
    data,
    filePath,
  };
}

interface PostWithFilepath {
  content: string;
  data: {
    [key: string]: any;
  };
  filePath: string;
}
