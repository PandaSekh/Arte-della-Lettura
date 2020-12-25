import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

const client = require("@sanity/client")({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	useCdn: true,
	token: process.env.SANITY_READ_TOKEN,
});

const ids = [];

getAllIds().then(() => deleteAllDocs());

function getAllIds() {
	return new Promise(resolve => {
		client.fetch("*{_id}").then(res => {
			res.forEach(r => ids.push(r._id));
			console.log("IDs to delete: ", ids.length);
			resolve();
		});
	});
}

function deleteAllDocs() {
	ids.forEach((id, index) => {
		setTimeout(() => {
			client
				.delete(id)
				.then(res => {
					console.log("Deleted with res: ", res);
				})
				.catch(err => console.log(err));
		}, 1000 * (index + 1));
	});
}

// client
// 	.delete("bike-123")
// 	.then(res => {
// 		console.log("Bike deleted");
// 	})
// 	.catch(err => {
// 		console.error("Delete failed: ", err.message);
// 	});
