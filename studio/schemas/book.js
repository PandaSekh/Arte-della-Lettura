import { RiBookLine } from "react-icons/ri";

export default {
	name: "book",
	type: "document",
	title: "Book",
	icon: RiBookLine,
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "isbn",
			type: "string",
			title: "ISBN",
		},
		{
			name: "isbn13",
			type: "string",
			title: "ISBN-13",
		},
		{
			name: "synopsis",
			type: "text",
			title: "Synopsis",
		},
		{
			name: "author",
			title: "Author",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "genre",
			title: "Genre",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "publishedDate",
			title: "Published Date",
			type: "datetime",
		},
		{
			name: "pages",
			title: "Pages",
			type: "number",
		},
		{
			name: "format",
			title: "Format",
			type: "string",
		},
		{
			name: "editor",
			title: "Editor",
			type: "number",
		},
		{
			name: "rating",
			title: "Rating",
			type: "number",
		},
	],
	preview: {
		select: {
			title: "title",
			authors: "author",
		},
		prepare(selection) {
			const { title, authors } = selection;
			return {
				title: title,
				subtitle: authors.length <= 1 ? authors[0] : authors.join(","),
			};
		},
	},
};
