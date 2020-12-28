export default {
	name: "publisher",
	title: "Publisher",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "logo",
			title: "Logo",
			type: "image",
			options: {
				hotspot: false,
			},
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
				slugify: input =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "website",
			title: "Website",
			type: "string",
		},
	],
};
