/* eslint-disable no-param-reassign */
/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";
import { Reactions } from "@interfaces/Reactions";

function merge(map: Reactions, newEmoji: EmojiBody): Reactions {
  if (map[newEmoji.label]) {
    let count = map[newEmoji.label];
    count = newEmoji.counter;
    map[newEmoji.label] = count;
  } else {
    map[newEmoji.label] = newEmoji.counter;
  }
  return map;
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise(async (resolve) => {
    const updatedEmoji: EmojiBody = req.body;
    const { slug } = req.query;

    try {
      // get the original file with comments
      // here we use json instead of raw like the GET because somehow with raw we don't have the file sha
      const prevReactions = await request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `reactions/${slug}.json`,
          ref: "prod",
        }
      ).catch((e) => {
        if (e.status !== 404) throw new Error(e);
      });

      if (prevReactions) {
        // get the data from the base64 encoded content. Disabling things because it actually exist. Might need to update this once I understand how this library handles types

        const data = JSON.parse(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Unreachable code error
          Buffer.from(prevReactions.data.content, "base64").toString("ascii")
        );
        // save the sha. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const { sha } = prevReactions.data;

        // merge
        const dataToSave: Reactions = merge(data, updatedEmoji);
        // save the new comment to git
        request("PUT /repos/{owner}/{repo}/contents/{path}", {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `reactions/${slug}.json`,
          branch: "prod",
          message: `Updated reactions on post ${slug}`,
          sha,
          content: Buffer.from(JSON.stringify(dataToSave), "ascii").toString(
            "base64"
          ),
        }).then((response) => {
          res
            .status(response.status)
            .json(JSON.stringify(response.data.commit.message));
          resolve();
        });
      } else {
        // merge
        const dataToSave: Reactions = {};
        dataToSave[updatedEmoji.label] = updatedEmoji.counter;

        // save the new comment to git
        request("PUT /repos/{owner}/{repo}/contents/{path}", {
          headers: {
            authorization: `token ${process.env.GITHUB_TOKEN}`,
            accept: "application/vnd.github.v3+json",
          },
          owner: "PandaSekh",
          repo: "arte-della-lettura",
          path: `reactions/${slug}.json`,
          branch: "prod",
          message: `Updated reactions on post ${slug}`,
          content: Buffer.from(JSON.stringify(dataToSave), "ascii").toString(
            "base64"
          ),
        }).then((response) => {
          res.status(response.status);
          resolve();
        });
      }
    } catch (e) {
      res.status(500).json(e);
      resolve();
    }
  });
};

interface EmojiBody {
  label: string;
  counter: number;
}
