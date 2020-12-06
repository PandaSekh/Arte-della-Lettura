export const client = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	token:
		"skrTcQkBq4b72oQqgWkoXBwN6Fd3JXt0UxnJM0ahqnDv8YJpxtCBdG3yyh0LlupTIuA5KEU52pfyDb2LjO2v6uSJX8wvXFq7XDU3aaMJCeDLTwEbBZpV2gRFFla43djhl1j0eiyZBjQQBMTUWzlquUkJV8rWDxmffFpjIMxYIZWsmbvsFDiQ",
	useCdn: false,
});

export const getAllPosts = async () => {
	const query = '*[_type == "post"]';
	return await client.fetch(query);
};
