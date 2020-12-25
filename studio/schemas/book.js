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
			of: [
				{
					type: "reference",
					to: [{ type: "author" }],
				},
			]
		},
		{
			name: "genres",
			title: "Genres",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "genre" }],
				},
			],
		},
		{
			name: "subgenres",
			title: "SubGenres",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "genre" }],
				},
			],
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
			name: "yearPublished",
			title: "Published Year",
			type: "number",
		},
		{
			name: "originalYearPublished",
			title: "Original Published Year",
			type: "number",
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
			type: "reference",
			to: [{ type: "publisher" }],
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
			author: "author.0.name",
		},
		prepare(selection) {
			const { title, authors } = selection;
			return {
				title: title,
				subtitle: authors,
			};
		},
	},
};
