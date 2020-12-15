export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		// {
		// 	name: "author",
		// 	title: "Author",
		// 	type: "reference",
		// 	to: { type: "author" },
		// },
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: false,
			},
		},
		{
			name: "category",
			title: "Category",
			type: "string",
		},
// 		{
// 			name: "tags",
// 			title: "tags",
// 			type: "array",
// 			of: [{ type: "string" }],
// 			options: {
// 				layout: "tags",
// 			},
// 		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "date",
			options: {
				dateFormat: "DD MM YYYY",
				timeStep: 30,
				calendarTodayLabel: "Oggi",
			},
		},
		{
			name: "updatedAt",
			title: "Updated at",
			type: "date",
			options: {
				dateFormat: "DD MM YYYY",
				timeStep: 30,
				calendarTodayLabel: "Oggi",
			},
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			date: "publishedAt",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
