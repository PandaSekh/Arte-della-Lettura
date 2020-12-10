// import { useState } from "react";

// // import dynamic from "next/dynamic";
// import { getPosts } from "../lib/cache";
// import MiniSearch from "minisearch";

// export default function Search(props) {
// 	const [query, setQuery] = useState("");
// 	const [results, setResults] = useState([]);

// 	let printResults = [];
// 	const documents = props.postsWithIds;
// 	console.log(documents);

// 	let miniSearch = new MiniSearch({
// 		fields: ["title", "categories", "body"],
// 		storeFields: ["title"],
// 	});
// 	miniSearch.addAll(documents);

// 	function handleOnChange(e) {
// 		setQuery(e.target.value);
// 	}

// 	function handleClick() {
// 		setResults(miniSearch.search(query));
// 		console.log("results", results);
// 		console.log("query", query);
// 		printResults = results.map(result => {
// 			return <p>{result.title}</p>;
// 		});
// 	}

// 	return (
// 		<div>
// 			<label for="search">Ricerca</label>
// 			<input
// 				id="search"
// 				type="text"
// 				value={query}
// 				onChange={handleOnChange}
// 			/>
// 			<button onClick={handleClick}>Search</button>
// 			<br />
// 			{printResults && (
// 				<div>
// 					<p>Risultati: </p>
// 					<div>{printResults}</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export async function getStaticProps() {
// 	const posts = await getPosts();
// 	let i = 1;
// 	const postsWithIds = posts.map(post => {
// 		post.id = i++;
// 		return post;
// 	});
// 	return { props: { postsWithIds } };
// }
