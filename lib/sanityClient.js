import imageUrlBuilder from "@sanity/image-url";

export const client = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	token:
		"skrTcQkBq4b72oQqgWkoXBwN6Fd3JXt0UxnJM0ahqnDv8YJpxtCBdG3yyh0LlupTIuA5KEU52pfyDb2LjO2v6uSJX8wvXFq7XDU3aaMJCeDLTwEbBZpV2gRFFla43djhl1j0eiyZBjQQBMTUWzlquUkJV8rWDxmffFpjIMxYIZWsmbvsFDiQ",
	useCdn: false,
});

export const getAllPosts = async () => {
	const query =
		'*[_type == "post"]{...,body[]{..., _type=="reference"=>^->, asset->{..., "_key": _id} ,markDefs[]{..., _type == "internaLink" => {"slug": @.reference->slug}}}, "book": *[_type=="book" && references(^.id)]}';
	// '*[_type == "post"]{...,body[]{..., _type == "reference" => {..., _ref->}, asset->{..., "_key": _id} ,markDefs[]{..., _type == "internaLink" => {"slug": @.reference->slug}}}}';
	// '*[_type == "post"]{...,body[]{..., node->{..., "_key": _id, "body":@._ref->}, asset->{..., "_key": _id} ,markDefs[]{..., _type == "internaLink" => {"slug": @.reference->slug}}}}';
	// '*[_type == "post"]{...,body[]{..., reference[]->, asset->{..., "_key": _id} ,markDefs[]{..., book->, _type == "internaLink" => {"slug": @.reference->slug}}}}';
	// '*[_type == "post"]{..., body[]{..., markDefs[]{..., _type == "book" => {"body": @.reference->}, _type == "internaLink" => {"slug": @.reference->slug}}}}';
	return await client.fetch(query);
};

const builder = imageUrlBuilder(client);

export function getImgUrl(source) {
	return builder.image(source);
}
