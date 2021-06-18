import { request } from "@octokit/request";
import { EmojiInterface } from "../components/EmojiBlock/types";

export default async function getReactions(slug: string): Promise<Array<EmojiInterface> | null> {
  try {
    const reactions = await request("GET /repos/{owner}/{repo}/contents/{path}", {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
        accept: "application/vnd.github.v3.raw",
      },
      owner: "PandaSekh",
      repo: "arte-della-lettura",
      path: `reactions/${slug}.json`,
      ref: "dev",
    });

    return JSON.parse(reactions.data as unknown as string);
  } catch (e) {
    return null;
  }
}
