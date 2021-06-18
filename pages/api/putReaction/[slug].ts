/* eslint-disable no-param-reassign */
/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmojiInterface } from "../../../components/EmojiBlock/types";

function merge(array: Array<EmojiInterface>, newEmoji: EmojiInterface): Array<EmojiInterface> {
  const { label } = newEmoji;
  const toRemove = array.find((e) => e.label === label);
  if (toRemove) {
    array.splice(array.indexOf(toRemove), 1);
    array.push(newEmoji);
  }
  array.push(newEmoji);
  return array;
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise(async (resolve) => {
    const updatedEmoji: EmojiInterface = req.body;
    const { slug } = req.query;

    try {
      // get the original file with comments
      // here we use json instead of raw like the GET because somehow with raw we don't have the file sha
      const prevReactions = await request("GET /repos/{owner}/{repo}/contents/{path}", {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
          accept: "application/vnd.github.v3+json",
        },
        owner: "PandaSekh",
        repo: "arte-della-lettura",
        path: `reactions/${slug}.json`,
        ref: "dev",
      }).catch((e) => {
        if (e.status !== 404) throw new Error(e);
      });

      if (prevReactions) {
        // get the data from the base64 encoded content. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const data = JSON.parse(Buffer.from(prevReactions.data.content, "base64").toString("ascii"));
        // save the sha. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const { sha } = prevReactions.data;

        // merge
        const dataToSave = merge(data, updatedEmoji);
        // save the new comment to git
        const update = await request("PUT /repos/{owner}/{repo}/contents/{path}", {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `reactions/${slug}.json`,
          branch: "dev",
          message: `Updated reactions on post ${slug}`,
          sha,
          content: Buffer.from(JSON.stringify(dataToSave), "ascii").toString("base64"),
        });

        res.status(200).json(JSON.stringify(update));
        resolve();
      } else {
        // merge
        const dataToSave = [updatedEmoji];
        // save the new comment to git
        const update = await request("PUT /repos/{owner}/{repo}/contents/{path}", {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `reactions/${slug}.json`,
          branch: "dev",
          message: `Updated reactions on post ${slug}`,
          content: Buffer.from(JSON.stringify(dataToSave), "ascii").toString("base64"),
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
