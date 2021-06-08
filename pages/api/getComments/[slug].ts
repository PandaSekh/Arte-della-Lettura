/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise(async (resolve) => {
    const { slug } = req.query;
    try {
      const comments = await request("GET /repos/{owner}/{repo}/contents/{path}", {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
          accept: "application/vnd.github.VERSION.raw",
        },
        owner: "PandaSekh",
        repo: "arte-della-lettura",
        path: `comments/${slug}.json`,
        ref: "comments",
      });
      // console.log(JSON.stringify(comments, null, 2));
      res.status(200).json(JSON.stringify(comments.data));
      resolve();
    } catch (e) {
      res.status(404).json(e);
      resolve();
    }
  });
};
