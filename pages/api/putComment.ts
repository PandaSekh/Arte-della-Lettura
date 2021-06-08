import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: "octocat",
    repo: "hello-world",
    path: "path",
    message: "message",
    content: "content",
  });
  res.status(200).json({ name: "John Doe" });
};
