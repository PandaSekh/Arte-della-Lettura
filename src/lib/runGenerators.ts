import generateFuseData from "./generateFuseData"
import generateFuseIndex from "./generateFuseIndex"
import generateRandomPosts from "./generateRandomPosts"
import generateRelatedPostsData from "./generateRelatedPostsData"

async function main() {
  const fuseData = generateFuseData();
  const fuseIndex = generateFuseIndex()
  const random = generateRandomPosts()
  const related = generateRelatedPostsData()

  await Promise.all([fuseData, fuseIndex, random, related]);
}

main();