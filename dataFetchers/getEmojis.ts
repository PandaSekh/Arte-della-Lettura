import { request } from "@octokit/request";
import { EmojiInterface } from "../components/EmojiBlock/types";

function getEmoji(label: string) {
  switch (label) {
    case "libro":
      return "📚";
    case "estasiato":
      return "🤩";
    case "risata":
      return "🤣";
    case "assonnato":
      return "😪";
    case "furioso":
      return "😤";
    case "preoccupato":
      return "😰";
    default:
      return "📚";
  }
}

export default async function getReactions(slug: string): Promise<Array<EmojiInterface> | null> {
  try {
    const reactions = await request("GET /repos/{owner}/{repo}/contents/{path}", {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
        accept: "application/vnd.github.v3.raw",
      },
      owner: "PandaSekh",
      repo: "arte-della-lettura",
      path: `reactions/${slug}.json`,
      ref: "dev",
    });

    const emojiData: Map<string, number> = JSON.parse(reactions.data as unknown as string);
    const emojiArray: Array<EmojiInterface> = [];

    emojiData.forEach((count, label) => {
      emojiArray.push({ emoji: getEmoji(label), label, counter: count });
    });

    return emojiArray;
  } catch (e) {
    return null;
  }
}
