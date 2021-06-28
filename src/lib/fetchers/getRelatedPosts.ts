import fs from "fs";
import path from "path";

const REL_POSTS_PATH = "./src/data/related-posts";

/**
 * Get the related posts given a post slug
 * @param postSlug the post slug
 * @returns array of top 5 posts slug
 */
export default function getRelatedPosts(postSlug: string): Array<RelatedPost> {
  return JSON.parse(
    fs.readFileSync(path.join(REL_POSTS_PATH, `${postSlug}.json`)).toString()
  );
}

export interface RelatedPost {
  title: string;
  slug: string;
  image: string;
}
