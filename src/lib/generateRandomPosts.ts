import fs from "fs";
import PostsDataSingleton from "../../dataFetchers/postsData";

function generateRandomPost() {
  const data = PostsDataSingleton.getInstance().getRandomBooks(5);
  fs.writeFileSync("./src/data/random-posts.json", JSON.stringify(data));
}

function main() {
  try {
    generateRandomPost();
  } catch (err) {
    throw new Error(err);
  }
}

main();
