import imageUrlBuilder from "@sanity/image-url";

export const client = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	token:
		"skrTcQkBq4b72oQqgWkoXBwN6Fd3JXt0UxnJM0ahqnDv8YJpxtCBdG3yyh0LlupTIuA5KEU52pfyDb2LjO2v6uSJX8wvXFq7XDU3aaMJCeDLTwEbBZpV2gRFFla43djhl1j0eiyZBjQQBMTUWzlquUkJV8rWDxmffFpjIMxYIZWsmbvsFDiQ",
	useCdn: false,
});

/**
 * Gets all the posts, solving the references to books
 */
export const getAllPosts = async () => {
	const query =
		'*[_type == "post"]{...,body[]{..., _type=="reference"=>^->, asset->{..., "_key": _id} ,markDefs[]{..., _type == "internaLink" => {"slug": @.reference->slug}}}}';
	return await client.fetch(query);
};

export const getAllPostsSlugs = async () => {
	const query = '*[_type == "post"]{slug}';
	return await client.fetch(query);
};

export const getPost = async postSlug => {
	const query = `*[_type == "post" && slug.current == "${postSlug}"]{..., body[]{..., _type=="reference"=>^->,asset->{..., "_key": _id}, markDefs[]{..., _type == "internalLink" => {"slug": @.reference->slug}}}}[0]`;
	return await client.fetch(query);
};

export function getImgUrl(source) {
	return imageUrlBuilder(client).image(source);
}
