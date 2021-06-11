/* eslint-disable no-param-reassign */
/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";
import Comment from "../../../interfaces/Comment";
import { encrypt } from "../../../lib/encryption/crypto";
import config from "../../../website.config.json";

function appendToParent(comments: Array<Comment>, newComment: Comment): Array<Comment> {
  const modifiedComments = comments;

  modifiedComments.forEach((comment) => {
    if (comment.id === newComment.parentCommentId) {
      comment.children.push(newComment);
    } else if (comment.children && comment.children.length > 0) {
      comment.children = appendToParent(comment.children, newComment);
    }
  });
  return modifiedComments;
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const newComment: Comment = req.body;
  newComment.email = encrypt(newComment.email as string);
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
      }).catch((e) => {
        if (e.status !== 404) throw new Error(e);
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
          data = appendToParent(data, newComment);
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
          message: `Updated comment on post ${slug}`,
          sha,
          content: Buffer.from(JSON.stringify(data), "ascii").toString("base64"),
        });

        await fetch(`${config.baseurl}/api/sendEmail/${slug}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ allComments: data, newComment, isChild: true }),
        }).then(() => {
          res.status(200).json(JSON.stringify(update));
          resolve();
        });
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
          message: `New comment on post ${slug}`,
          content: Buffer.from(JSON.stringify(data), "ascii").toString("base64"),
        });

        await fetch(`${config.baseurl}/api/sendEmail/${slug}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ allComments: data, newComment, isChild: false }),
        }).then(() => {
          res.status(200).json(JSON.stringify(update));
          resolve();
        });
      }
    } catch (e) {
      res.status(500).json(e);
      resolve();
    }
  });
};
