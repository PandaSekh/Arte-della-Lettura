import { ReactElement, useState } from "react";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import fuseIndex from "@data/fuse-index.json";
import fuseData from "@data/fuse-data.json";
import Post from "@interfaces/Post";
import Input from "@components/Search/Input";
import PostHomepage from "@components/Homepage/PostHomepage";

export default function Search(): ReactElement | null {
  const [results, setResults] = useState<Post[]>([]);
  const options = {
    keys: ["title", "content"],
    minMatchCharLength: 2,
  };

  const myIndex = Fuse.parseIndex(fuseIndex);
  const fuse = new Fuse<Post>(fuseData, options, myIndex);

  return (
    <div className="mx-auto w-full flex flex-col">
      <Input setResultsCallback={setResults} fuse={fuse} />
      <div className="content grid-cols-1 md:grid-cols-2 grid">
        {results.map((post) => (
          <motion.article
            key={post.data.title}
            className="mx-auto my-0 px-6"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <PostHomepage post={post.content} data={post.data} />
          </motion.article>
        ))}
      </div>
    </div>
  );
}
