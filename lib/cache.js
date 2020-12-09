import { getAllPosts } from "./sanityClient";

const cache = new Map();

export const getPosts = async () => {
	if (cache.has("posts")) {
		console.log("from cache");
		return cache.get("posts");
	} else {
		const posts = await getAllPosts();
		cache.set("posts", posts);
		return posts;
	}
};
