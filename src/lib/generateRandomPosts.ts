import { promises as fs } from 'fs';
import PostsDataSingleton from "../../dataFetchers/postsData";

export default function generateRandomPost(): Promise<void> {
  const data = PostsDataSingleton.getInstance().getRandomBooks(5);
  return fs.writeFile("./src/data/random-posts.json", JSON.stringify(data));
}
