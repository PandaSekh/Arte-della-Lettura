import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise(async (resolve) => {
    // get the original file
    const { slug } = req.query;
    try {
      const originalData = await request("GET /repos/{owner}/{repo}/contents/{path}", {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
          accept: "application/vnd.github.VERSION.raw",
        },
        owner: "PandaSekh",
        repo: "arte-della-lettura",
        path: `comments/${slug}.json`,
        ref: "comments",
      });

      console.log(JSON.stringify(console.log(originalData), null, 2));

      const update = await request("PUT /repos/{owner}/{repo}/contents/{path}", {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
          accept: "application/vnd.github.VERSION.raw",
        },
        owner: "PandaSekh",
        repo: "arte-della-lettura",
        path: `comments/${slug}.json`,
        branch: "comments",
        message: `New comment on post${slug}`,
        sha: originalData.sha,
        data: originalData,
      });

      console.log(JSON.stringify(console.log(update), null, 2));
      // console.log(JSON.stringify(comments, null, 2));
      res.status(200).json(JSON.stringify(update));
      resolve();
    } catch (e) {
      res.status(404).json(e);
      resolve();
    }
  });
};
