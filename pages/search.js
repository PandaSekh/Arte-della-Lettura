import Fuse from "fuse.js";
import { useState, useEffect } from "react";

import searchablePosts from "../cache/search.json";
import Link from "next/link";
import getKey from "../lib/keyGen";

export default function Search() {
	const [query, setQuery] = useState("");

	const [results, setResults] = useState();

	function handleSearch() {}

	function handleQueryUpdate(e) {
		setQuery(e.target.value);
	}

	useEffect(() => {
		setResults(
			fuse.search(query).map(res => {
				return (
					<p key={getKey()}>
						<Link
							href={`/${encodeURIComponent(
								res.item.slug?.current
							)}`}
						>
							<a>{res.item.title}</a>
						</Link>
					</p>
				);
			})
		);
	}, [query]);

	const options = {
		includeScore: false,
		keys: [
			{
				name: "title",
				weight: 1,
			},
		],
	};

	const fuse = new Fuse(searchablePosts, options);

	return (
		<div>
			<p>Testing out the search functionality</p>
			<label htmlFor="search">Cerca: </label>
			<input
				type="text"
				id="search"
				value={query}
				onChange={handleQueryUpdate}
			/>
			<button onClick={handleSearch}>Cerca</button>
			<div> Risultati: {results}</div>
		</div>
	);
}
