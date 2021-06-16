import fs from "fs";
import PostsDataSingleton, { Post } from "../../dataFetchers/postsData";

function genIndex() {
  const data: Array<Post> = PostsDataSingleton.getInstance().getPosts();

  // Serialize and save it
  fs.writeFileSync("./src/data/fuse-data.json", JSON.stringify(data));
}

function main() {
  try {
    genIndex();
  } catch (err) {
    throw new Error(err);
  }
}

main();

// export interface FuseSearchData {
//   title: string;
//   slug: string;
//   content?: string;
//   image?: string;
// }
