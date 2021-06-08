import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  console.log("request arrived");
  console.log(`token ${process.env.GITHUB_TOKEN}`);
  const comments = await request("GET /repos/{owner}/{repo}/contents/{path}", {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: "PandaSekh",
    repo: "arte-della-lettura",
    path: "comments",
    ref: "prod",
  });
  console.log(JSON.stringify(comments, null, 2));
  res.status(200).json(comments);
};
