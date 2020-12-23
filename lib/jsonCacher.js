const fs = require("fs");
const path = require("path");
const CACHE_PATH = "./cache";

const client = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	useCdn: true,
});

const getAllPosts = async () => {
	console.log("GetAllPosts from db called");
	const query =
		'*[_type == "post"]{...,body[]{..., _type=="reference"=>^->, asset->{..., "_key": _id} ,markDefs[]{..., _type == "internalLink" => {"slug": ^.reference->slug}}}} | order(publishedAt desc)';
	return await client.fetch(query);
};

const getPostsForSearch = async () => {
	console.log("getPostsForSearch from db called");
	const query =
		'*[_type == "post"]{title, slug, body[]{..., _type=="reference"=>^->, asset->{..., "_key": _id} ,markDefs[]{..., _type == "internalLink" => {"slug": ^.reference->slug}}}}';
	return await client.fetch(query);
};

const writePostsToFile = (filename, data) => {
	const filePath = path.resolve(CACHE_PATH, filename);
	if (!fs.existsSync(CACHE_PATH)) {
		fs.mkdirSync(CACHE_PATH);
	}
	fs.writeFile(filePath, data, { flag: "w" }, err => console.error(err));
};

function toPlainText(blocks = []) {
	return blocks
		.map(block => {
			if (block._type !== "block" || !block.children) {
				return "";
			}
			return block.children.map(child => child.text).join("");
		})
		.join("\n\n");
}

async function main() {
	const posts = await getAllPosts();
	const searchPosts = await getPostsForSearch();

	searchPosts.forEach(post => {
		post.body = toPlainText(post.body);
	});

	const jsonPosts = JSON.stringify(posts);
	const bufferPosts = Buffer.from(jsonPosts);
	const jsonSearch = JSON.stringify(searchPosts);
	const bufferSearch = Buffer.from(jsonSearch);
	writePostsToFile("posts.json", bufferPosts);
	writePostsToFile("search.json", bufferSearch);
}

main();
