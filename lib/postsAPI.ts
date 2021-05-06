import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getDateFromStringMMDDYYYY } from "./timeUtils";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((postPath) => /\.mdx?$/.test(postPath));

export function getPostBySlug(slug: string): Buffer {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  return fs.readFileSync(postFilePath);
}

export function getPublishedPostPath(): string[] {
  return postFilePaths.filter((filePath) => /\.mdx?$/.test(filePath));
}

export function getPublishedPostSlug(): {
  params: {
    slug: string;
  };
}[] {
  return getPublishedPostPath()
    .map((postPath) => postPath.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
}

export function getPublishedPosts(
  sliceFrom: number | undefined = undefined,
  sliceTo: number | undefined = undefined
): {
  content: string;
  data: {
    [key: string]: unknown;
  };
  filePath: string;
}[] {
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
        getDateFromStringMMDDYYYY(b.data.publishedAt).getTime() -
        getDateFromStringMMDDYYYY(a.data.publishedAt).getTime()
    )
    .slice(sliceFrom, sliceTo);
}

export function getPublishedPostsForHomepage(
  sliceFrom: number | undefined = undefined,
  sliceTo: number | undefined = undefined
): { data: { [key: string]: unknown }; filePath: string }[] {
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
        getDateFromStringMMDDYYYY(b.data.publishedAt).getTime() -
        getDateFromStringMMDDYYYY(a.data.publishedAt).getTime()
    )
    .slice(sliceFrom, sliceTo);
}

export function getPostsForHomepageBySlug(slug: string): { data: { [key: string]: any }; filePath: string } {
  const filePath =
    getPublishedPostPath()
      .map((postPath) => postPath.replace(/\.mdx?$/, ""))
      .find((postFilePath) => postFilePath === slug) || "";
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
