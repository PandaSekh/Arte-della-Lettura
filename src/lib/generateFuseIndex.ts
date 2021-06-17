import Fuse from "fuse.js";
import fs from "fs";
import PostsDataSingleton from "../../dataFetchers/postsData";

function genIndex() {
  const data = PostsDataSingleton.getInstance()
    .getPosts()
    .map((post) => {
      return { title: post.data.title, slug: post.data.slug, content: post.content };
    });

  const options = { keys: ["title", "content"] };

  // Create the Fuse index
  const myIndex = Fuse.createIndex(options.keys, data);

  // Serialize and save it
  fs.writeFileSync("./src/data/fuse-index.json", JSON.stringify(myIndex.toJSON()));
}

function main() {
  try {
    genIndex();
  } catch (err) {
    throw new Error(err);
  }
}

main();
