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
			name: "cover",
			title: "Book Cover",
			type: "image",
			options: {
				hotspot: false,
			},
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
			name: "genres",
			title: "Genres",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "subgenres",
			title: "SubGenres",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "language",
			title: "Language",
			type: "string",
		},
		{
			name: "series",
			title: "Series",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "publishedDate",
			title: "Published Date",
			type: "date",
		},
		{
			name: "originalPublishedDate",
			title: "Original Published Date",
			type: "date",
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
			name: "publisher",
			title: "Publisher",
			type: "string",
		},
		{
			name: "rating",
			title: "Rating",
			type: "number",
		},
		{
			name: "avgRating",
			title: "Average Rating",
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
