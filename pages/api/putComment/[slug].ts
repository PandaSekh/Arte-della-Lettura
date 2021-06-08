/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../../interfaces/Comment";

function appendNewComment(newComment: Comment, oldComments: Array<Comment>): Array<Comment> {
  const parent = oldComments.find((comments) => comments.id === newComment.parentCommentId);
  if (!parent) throw new Error("No parent found, something bad");
  oldComments.splice(oldComments.indexOf(parent), 1);
  parent.children.push(newComment);
  oldComments.push(parent);
  return oldComments;
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const newComment = req.body;
  return new Promise(async (resolve) => {
    const { slug } = req.query;
    try {
      // get the original file with comments
      // here we use json instead of raw like the GET because somehow with raw we don't have the file sha
      const originalComments = await request("GET /repos/{owner}/{repo}/contents/{path}", {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
          accept: "application/vnd.github.v3+json",
        },
        owner: "PandaSekh",
        repo: "arte-della-lettura",
        path: `comments/${slug}.json`,
        ref: "comments",
      });

      // if no file is present, there's no comments. We need two different routes
      if (originalComments) {
        // get the data from the base64 encoded content. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        let data = JSON.parse(Buffer.from(originalComments.data.content, "base64").toString("ascii"));
        // save the sha. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const { sha } = originalComments.data;
        // add the new comment
        if (newComment.parentCommentId) {
          data = appendNewComment(newComment, data);
        } else {
          data.push(newComment);
        }

        // save the new comment to git
        const update = await request("PUT /repos/{owner}/{repo}/contents/{path}", {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `comments/${slug}.json`,
          branch: "comments",
          message: `New comment on post${slug}`,
          sha,
          content: Buffer.from(JSON.stringify(data), "ascii").toString("base64"),
        });

        res.status(200).json(JSON.stringify(update));
        resolve();
      } else {
        const data = [newComment];
        // save the new comment to git
        const update = await request("PUT /repos/{owner}/{repo}/contents/{path}", {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `comments/${slug}.json`,
          branch: "comments",
          message: `New comment on post${slug}`,
          content: Buffer.from(JSON.stringify(data), "ascii").toString("base64"),
        });

        res.status(200).json(JSON.stringify(update));
        resolve();
      }
    } catch (e) {
      res.status(500).json(e);
      resolve();
    }
  });
};
