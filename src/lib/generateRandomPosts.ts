import { promises as fs } from 'fs';
import PostsDataSingleton from "@fetchers/postsData";

export default function generateRandomPost(): Promise<void> {
  const data = PostsDataSingleton.getInstance().getRandomBooks(5);
  const reduced = data.map(book => { return { title: book.title, image: book.image, slug: book.reviewSlug } })
  return fs.writeFile("./src/data/random-posts.json", JSON.stringify(reduced));
}
