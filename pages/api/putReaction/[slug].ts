/* eslint-disable no-param-reassign */
/* eslint-disable no-async-promise-executor */
import { request } from "@octokit/request";
import type { NextApiRequest, NextApiResponse } from "next";

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

function merge(map: Map<string, number>, newEmoji: EmojiBody): Map<string, number> {
  if (map.has(newEmoji.label)) {
    // TODO
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    let count = map.get(newEmoji.label)!;
    count += newEmoji.counter;
    map.set(newEmoji.label, count);
  } else {
    map.set(newEmoji.label, newEmoji.counter);
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
        const dataToSave: Map<string, number> = merge(data, updatedEmoji);
        // save the new comment to git
        request("PUT /repos/{owner}/{repo}/contents/{path}", {
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
        }).then((response) => {
          res.status(response.status);
          resolve();
        });
      } else {
        // merge
        const dataToSave = new Map<string, number>();
        dataToSave.set(updatedEmoji.label, updatedEmoji.counter);
        // save the new comment to git
        request("PUT /repos/{owner}/{repo}/contents/{path}", {
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
