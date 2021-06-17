import { useState } from "react";
import Fuse from "fuse.js";
import fuseIndex from "../src/data/fuse-index.json";
import fuseData from "../src/data/fuse-data.json";
import Post from "../interfaces/Post";
import RenderPosts from "../components/Homepage/RenderPosts";
import Input from "../components/Search/Input";

export default function Search(): JSX.Element {
  const [results, setResults] = useState<any[]>([]);
  const options = {
    keys: ["title", "content"],
    minMatchCharLength: 2,
  };

  const myIndex = Fuse.parseIndex(fuseIndex);
  const fuse = new Fuse<Post>(fuseData, options, myIndex);

  return (
    <div className="mx-auto w-full flex flex-col">
      <Input
        setResultsCallback={(query: string) => {
          setResults([
            ...fuse
              .search(query)
              .slice(0, 6)
              .map((item) => item.item),
          ]);
        }}
      />
      <RenderPosts posts={results} />
    </div>
  );
}
