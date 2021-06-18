import { request } from "@octokit/request";
import Comment from "../interfaces/Comment";

export default async function getComments(slug: string): Promise<Array<Comment> | null> {
  try {
    const comments = await request("GET /repos/{owner}/{repo}/contents/{path}", {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
        accept: "application/vnd.github.v3.raw",
      },
      owner: "PandaSekh",
      repo: "arte-della-lettura",
      path: `comments/${slug}.json`,
      ref: "dev",
    });

    return JSON.parse(comments.data as unknown as string);
  } catch (e) {
    return null;
  }
}
