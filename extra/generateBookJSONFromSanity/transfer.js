const fs = require("fs");
const path = require("path");
const sanityClient = require("@sanity/client")({
	projectId: "pbxbjfte",
	dataset: "production",
	token:
		"sk1kIqlXvcVXqFXpaRypulMFQnI3SS3g10tUh9q2lYVKwkBibd8NCIdBBBMimqRX3NQMb23sovTMGNueTrSThuVUOS88nwiy2pFwYrMKxI7DWXUiLjMksJLUCbRtOh5QWv47Xhire50YQGZ7VjS3q0BmK5fBhcKCxdOEqyF12FpdPWneSgWZ",
});
const query =
	'*[_type == "book"]{..., "author": author[]->{name, slug{current}},"genres": genres[]->{name, slug{current}},"subgenres": subgenres[]->{name, slug{current}},"publisher": publisher->{name, slug{current}}}';

const DIR = "books_sanity";

main();

function main() {
	sanityClient.fetch(query).then(books => {
		books.forEach(book => {
			console.log(book);
			const filename = path.join(DIR, stringToSlug(book.title) + ".json");
			const genres = book.genres
				?.map(genre => genre.name)
				.concat(book.subgenres?.map(subgenre => subgenre.name));
			const bookJSON = {
				title: book.title,
				isbn: book.isbn,
				isbn13: book.isbn13,
				synopsis: book.synopsis,
				author: book.author.map(author => author.name),
				genres: genres,
				language: book.language,
				publishedYear: book.publishedYear,
				ogPublishedYear: book.originalYearPublished,
				pages: book.pages,
				format: book.format,
				publisher: book.publisher.name,
				rating: book.rating,
				image: ".jpg",
			};
			fs.writeFileSync(filename, JSON.stringify(bookJSON, null, 2), {
				flag: "w",
			});
		});
	});
}

function stringToSlug(str) {
	str = str.replace(/^\s+|\s+$/g, ""); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to = "aaaaeeeeiiiioooouuuunc------";
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
	}

	str = str
		.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
		.replace(/\s+/g, "-") // collapse whitespace and replace by -
		.replace(/-+/g, "-"); // collapse dashes

	return str;
}
