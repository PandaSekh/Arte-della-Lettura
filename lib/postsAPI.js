import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getDateFrom_MM_DD_YYYY } from "./timeUtils";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postFilePaths = fs
	.readdirSync(POSTS_PATH)
	.filter(path => /\.mdx?$/.test(path));

export function getPostBySlug(slug) {
	const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
	return fs.readFileSync(postFilePath);
}

export function getPublishedPostPath() {
	return postFilePaths
		.map(filePath => {
			const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
			const { content, data } = matter(source);

			if (data.isPublished === false || !content) return null;
			else return filePath;
		})
		.filter(filePath => filePath)
		.filter(filePath => /\.mdx?$/.test(filePath));
}

export function getPublishedPostSlug() {
	return postFilePaths
		.map(filePath => {
			const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
			const { content, data } = matter(source);

			if (data.isPublished === false || !content) return null;
			else return filePath;
		})
		.filter(filePath => filePath)
		.filter(filePath => /\.mdx?$/.test(filePath))
		.map(path => path.replace(/\.mdx?$/, ""))
		.map(slug => ({ params: { slug } }));
}

export function getPublishedPosts(sliceFrom = undefined, sliceTo = undefined) {
	return getPublishedPostPath()
		.map(filePath => {
			const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
			const { content, data } = matter(source);

			return {
				content,
				data,
				filePath,
			};
		})
		.filter(post => post)
		.sort(
			(a, b) =>
				getDateFrom_MM_DD_YYYY(b.data.publishedAt) -
				getDateFrom_MM_DD_YYYY(a.data.publishedAt)
		)
		.slice(sliceFrom, sliceTo);
}

export function getPublishedPostsForHoepage(
	sliceFrom = undefined,
	sliceTo = undefined
) {
	return getPublishedPostPath()
		.map(filePath => {
			const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
			const {data } = matter(source);

			return {
				data,
				filePath,
			};
		})
		.filter(post => post)
		.sort(
			(a, b) =>
				getDateFrom_MM_DD_YYYY(b.data.publishedAt) -
				getDateFrom_MM_DD_YYYY(a.data.publishedAt)
		)
		.slice(sliceFrom, sliceTo);
}
