import { promises as fs } from 'fs';
import PostsDataSingleton, { Post } from "../../dataFetchers/postsData";

export default function genIndex(): Promise<void> {
  const data: Array<Post> = PostsDataSingleton.getInstance().getPosts();

  // Serialize and save it
  return fs.writeFile("./src/data/fuse-data.json", JSON.stringify(data));
}