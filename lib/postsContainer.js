import { getAllPosts } from "./sanityClient";

let posts = [];

export default function getPosts() {
	return posts.length > 0 ? posts : getPostsFromDB();
}

async function getPostsFromDB() {
	posts = [];
	console.log("getting posts from db");
	posts = await getAllPosts();
	return posts;
}
