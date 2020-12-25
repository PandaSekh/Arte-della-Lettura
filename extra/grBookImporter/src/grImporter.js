/**
 * Given a CSV export from Goodreads, it will add extra data to every book thru Google Books and will add and create all
 * the necessary documents in the Sanity database (Publisher, Authors, Genres and the Book itself).
 *
 * Known bug: The last book will not be created in the Database.
 *
 * @author Alessio Franceschi
 */

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();
const isbnCleanerRegex = /["= ]/g;

const sanityClient = require("@sanity/client")({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	useCdn: true,
	token: process.env.SANITY_READ_TOKEN,
});

const results = [];
let file;
const genresMap = new Map();
const authorsMap = new Map();
const publishersMap = new Map();

main();

function main() {
	console.log("\x1b[36m%s\x1b[0m", "Starting...");
	file = process.argv[2];
	if (!file || path.extname(file) !== ".csv") {
		if (fs.existsSync("input.csv")) {
			file = "input.csv";
		} else {
			console.error("You need a CSV file as input parameter.");
			process.exitCode = 1;
		}
	}
	prepareMaps().then(
		async () =>
			await parseCSV().then(() => console.log("Finished parseCSV"))
	);
}

const getKey = (length = 10) => {
	const n = Math.random() * (9 - 0) + 0;
	return n
		.toString()
		.replace(".", "")
		.substring(0, ++length);
};

function prepareMaps() {
	publishersMap.clear();
	genresMap.clear();
	authorsMap.clear();

	const pubPromise = new Promise(resolve => {
		sanityClient.fetch('*[_type == "publisher"]').then(res => {
			res.forEach(publisher => {
				publishersMap.set(publisher.name, publisher._id);
			});
			resolve();
		});
	});
	const genrePromise = new Promise(resolve => {
		sanityClient.fetch('*[_type == "genre"]').then(res => {
			res.forEach(genre => genresMap.set(genre.name, genre._id));
			resolve();
		});
	});
	const authorsPromise = new Promise(resolve => {
		sanityClient.fetch('*[_type == "author"]').then(res => {
			res.forEach(author =>
				authorsMap.set(`${author.name} ${author.lastname}`, author._id)
			);
			resolve();
		});
	});

	return Promise.all([pubPromise, genrePromise, authorsPromise]);
}

function parseCSV() {
	const bookPromises = [];
	const blockingPromise = new Promise(res => {
		setTimeout(() => {
			res();
		}, 1000 * 60);
	});
	bookPromises.push(blockingPromise);

	fs.createReadStream(file)
		.pipe(csv())
		.on("data", data => results.push(data))
		.on("end", () => {
			console.log(
				"\x1b[32m%s\x1b[0m",
				`File read. Total books found: ${results.length}`
			);
			results.forEach((result, index) => {
				setTimeout(async () => {
					console.log(
						"\x1b[34m%s\x1b[0m",
						`Creating book ${index + 1} of ${results.length}`
					);
					bookPromises.push(
						new Promise(
							async resolve =>
								await createBook(result, index).then(() =>
									resolve()
								)
						)
					);
				}, 1000 * 10 * (index + 1));
			});
		});

	return Promise.all(bookPromises);
}

function createBook(result, index) {
	const isbn = result.ISBN.replace(isbnCleanerRegex, "").trim();
	const isbn13 = result.ISBN13.replace(isbnCleanerRegex, "").trim();

	const bookPromise = new Promise(resolve => {
		const book = new Book(
			result.Title,
			isbn,
			isbn13,
			result.Binding,
			result["Original Publication Year"],
			result["Year Published"],
			result["Number of Pages"],
			result["My Rating"],
			result["Average Rating"]
		);

		const pubPromise = new Promise(resolve => {
			book.setPublisher(result.Publisher).then(() => resolve());
		});

		const extraPromise = getExtraMetadata(book);

		Promise.all([pubPromise, extraPromise]).then(() => resolve(book));
	});

	return new Promise(async resolve => {
		const bookToSave = await bookPromise;
		sanityClient.create(bookToSave).then(res => {
			console.log(
				"\x1b[32m%s\x1b[0m",
				`Book ${index} saved with ID: ${res._id}`
			);
			resolve();
		});
	});
}

async function getExtraMetadata(book) {
	return new Promise(async resolve => {
		const completeDataUrl = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=isbn:${
				book.isbn13 ? book.isbn13 : book.isbn
			}`
		)
			.then(res => res.json())
			.then(json => {
				if (json.totalItems && json.totalItems !== 0) {
					return json.items[0]?.selfLink;
				} else return null;
			});

		if (completeDataUrl) {
			console.log("\x1b[32m%s\x1b[0m", "Found extra data.");
			fetch(completeDataUrl)
				.then(res => res.json())
				.then(json => {
					book.setSynopsys(json.volumeInfo?.description);
					const a = new Promise(resolve => {
						book.setCategories(
							json.volumeInfo?.categories
						).then(() => resolve());
					});
					book.setLanguage(json.volumeInfo?.language);
					const b = new Promise(resolve =>
						book
							.setAuthor(json.volumeInfo?.authors)
							.then(() => resolve())
					);
					Promise.all([a, b]).then(() => resolve());
				});
		} else {
			console.log("\x1b[33m%s\x1b[0m", "No extra data found :C");
			resolve();
		}
	});
}

async function getPublisherRef(publisherName) {
	return sanityClient
		.fetch(`*[_type == "publisher" && name == "${publisherName}"]._id[0]`)
		.then(res => {
			return res;
		});
}

async function createPublisherRef(publisherName) {
	return await sanityClient
		.create({
			_type: "publisher",
			name: publisherName,
		})
		.then(result => {
			publishersMap.set(publisherName, result._id);
			return result._id;
		});
}

async function getAuthorRef(author) {
	return sanityClient
		.fetch(`*[_type == "author" && name == "${author}"]._id[0]`)
		.then(res => {
			return res;
		});
}

async function createAuthorRef(author) {
	return await sanityClient
		.create({
			_type: "author",
			name: author,
		})
		.then(result => {
			authorsMap.set(author, result._id);
			return result._id;
		});
}

async function getGenreRef(genre) {
	return sanityClient
		.fetch(`*[_type == "genre" && name == "${genre}"]._id[0]`)
		.then(res => {
			return res;
		});
}

async function createGenreRef(genre) {
	return await sanityClient
		.create({
			_type: "genre",
			name: genre,
		})
		.then(result => {
			genresMap.set(genre, result._id);
			return result._id;
		});
}

// BOOK CLASS
class Book {
	constructor(
		title,
		isbn,
		isbn13,
		binding,
		originalYearPublished,
		yearPublished,
		pages,
		rating,
		avgRating
	) {
		this.title = title;
		this.author = [];
		this.isbn = isbn;
		this.isbn13 = isbn13;
		this.format = binding;
		this.originalYearPublished = Number.parseInt(originalYearPublished);
		this.yearPublished = Number.parseInt(yearPublished);
		this.pages = Number.parseInt(pages);
		this.rating = Number.parseFloat(rating);
		this.avgRating = Number.parseFloat(avgRating);
		this._type = "book"; // Needed for Sanity
		this.language;
		this.genres = [];
		this.subgenres = [];
		this.synopsis;
	}

	setAuthor(authors) {
		if (!authors) return new Promise(resolve => resolve());

		const authorPromises = [];

		authors.forEach(author => {
			authorPromises.push(
				new Promise(async resolve => {
					let authorRef = authorsMap.has(author)
						? authorsMap.get(author)
						: await getAuthorRef(author);
					if (!authorRef) {
						authorRef = await createAuthorRef(author);
					}
					this.author.push({
						_type: "reference",
						_ref: authorRef,
						_key: getKey(),
					});
					resolve();
				})
			);
		});
		return Promise.all(authorPromises);
	}

	setLanguage(lang) {
		if (!lang) return;
		this.language = lang;
	}

	setSynopsys(synopsis) {
		if (!synopsis) return;
		this.synopsis = synopsis;
	}

	setCategories(categories) {
		if (!categories) return new Promise(resolve => resolve());
		const promises = [];

		categories.forEach(cat => {
			const splittedCategories = cat
				.split("/")
				.filter(el => el.trim() !== "General") // Remove the quite useless "General" category
				.map(category => category.trim()); // Trim every category

			const mainGenre = splittedCategories.shift();

			promises.push(
				new Promise(async resolve => {
					let mainGenreRef = genresMap.has(mainGenre)
						? genresMap.get(mainGenre)
						: await getGenreRef(mainGenre);
					if (!mainGenreRef) {
						mainGenreRef = await createGenreRef(mainGenre);
					}

					this.genres.push({
						_type: "reference",
						_ref: mainGenreRef,
						_key: getKey(),
					}); // The first elem is the main Category
					resolve();
				})
			);

			// The remaining ones are subgenres
			splittedCategories.forEach(subGenre => {
				promises.push(
					new Promise(async resolve => {
						let subGenreRef = genresMap.has(subGenre)
							? genresMap.get(subGenre)
							: await getGenreRef(subGenre);
						if (!subGenreRef) {
							subGenreRef = await createGenreRef(subGenre);
						}
						this.subgenres.push({
							_type: "reference",
							_ref: subGenreRef,
							_key: getKey(),
						});
						resolve();
					})
				);
			});
		});
		return Promise.all(promises);
	}

	setPublisher(publisher) {
		if (!publisher) return;
		return new Promise(async resolve => {
			let publisherRef = publishersMap.has(publisher)
				? publishersMap.get(publisher)
				: await getPublisherRef(publisher);
			if (!publisherRef) {
				publisherRef = await createPublisherRef(publisher);
			}
			this.publisher = { _type: "reference", _ref: publisherRef };
			resolve();
		});
	}
}
