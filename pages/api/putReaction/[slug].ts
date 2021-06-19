/* eslint-disable no-param-reassign */
/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";
import { Reactions } from "../../../components/EmojiBlock/types";

// function merge(array: Array<EmojiGit>, newEmoji: EmojiGit): Array<EmojiGit> {
//   const { label } = newEmoji;
//   console.log(`To add: ${newEmoji.label}`);
//   const toRemove = array.find((e) => e.label === label);
//   console.log(`To toRemove: ${toRemove?.label}`);
//   if (toRemove) {
//     console.log("To remove");
//     array.splice(array.indexOf(toRemove), 1, newEmoji);
//     console.log("Array after: ", JSON.stringify(array, null, 2));
//   }
//   array.push(newEmoji);
//   return array;
// }

function merge(map: Reactions, newEmoji: EmojiBody): Reactions {
  // console.log(`Merge map: ${JSON.stringify(map, null, 2)}`);
  // console.log(`newEmoji: ${JSON.stringify(newEmoji, null, 2)}`);
  if (map[newEmoji.label]) {
    let count = map[newEmoji.label];
    count = newEmoji.counter;
    map[newEmoji.label] = count;
  } else {
    map[newEmoji.label] = newEmoji.counter;
  }
  // console.log(`End Merge map: ${JSON.stringify(map, null, 2)}`);
  return map;
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise(async (resolve) => {
    const updatedEmoji: EmojiBody = req.body;
    // console.log("UpdatedEmoji: ", JSON.stringify(updatedEmoji, null, 2));
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

      // console.log("prevReactions: ", JSON.stringify(prevReactions, null, 2));

      if (prevReactions) {
        // get the data from the base64 encoded content. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const data = JSON.parse(
          Buffer.from(prevReactions.data.content, "base64").toString("ascii")
        );
        // save the sha. Disabling things because it actually exist. Might need to update this once I understand how this library handles types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const { sha } = prevReactions.data;

        // merge
        const dataToSave: Reactions = merge(data, updatedEmoji);
        // console.log("after merge: ", JSON.stringify(dataToSave, null, 2));
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
        // console.log("no prev data");
        // merge
        const dataToSave: Reactions = {};
        dataToSave[updatedEmoji.label] = updatedEmoji.counter;

        // console.log("Uploading this: ", dataToSave);
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
