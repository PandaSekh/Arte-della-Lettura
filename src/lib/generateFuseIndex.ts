import Fuse from "fuse.js";
import { promises as fs } from 'fs';

import PostsDataSingleton from "../../dataFetchers/postsData";

export default function genIndex(): Promise<void> {
  const data = PostsDataSingleton.getInstance()
    .getPosts()
    .map((post) => {
      return {
        title: post.data.title,
        slug: post.data.slug,
        content: post.content,
      };
    });

  const options = { keys: ["title", "content"] };

  // Create the Fuse index
  const myIndex = Fuse.createIndex(options.keys, data);

  // Serialize and save it
  return fs.writeFile(
    "./src/data/fuse-index.json",
    JSON.stringify(myIndex.toJSON())
  );
}