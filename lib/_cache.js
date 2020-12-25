// import { getAllPosts } from "./sanityClient";

import posts from "../cache/posts.json";

// const cache = new Map();

export const getPosts = async () => {
	// const data = posts;
	// const data = JSON.parse(posts);
	// console.log(data);
	return posts;
	// if (cache.has("posts")) {
	// 	console.log("from cache");
	// 	return cache.get("posts");
	// } else {
	// 	const posts = await getAllPosts();
	// 	cache.set("posts", posts);
	// 	return posts;
	// }
};
