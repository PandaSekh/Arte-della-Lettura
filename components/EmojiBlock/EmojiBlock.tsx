import defaults from "./defaultEmojis.json";
import EmojiCounter from "./EmojiCounter";
import config from "../../website.config.json";
import type { EmojiInterface } from "./types";

export default function EmojiBlock({
  emojis,
  slug,
}: {
  emojis: Array<EmojiInterface> | null;
  slug: string;
}): JSX.Element {
  const fullEmojis = defaults.map((emoji) => {
    const emojiFromData = emojis?.find((emojiData) => emojiData.label === emoji.label);
    const emojiFromDefaults = emoji;
    emojiFromDefaults.counter = emojiFromData?.counter || 0;
    return emojiFromDefaults;
  });

  function updateEmoji(emoji: EmojiInterface) {
    return fetch(`${config.baseurl}/api/putReaction/${slug}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(emoji),
    });
  }

  const mappedReactions = fullEmojis.map((emoji) => (
    <EmojiCounter key={emoji.label} emoji={emoji} value={emoji.counter} onUpdate={updateEmoji} />
  ));

  return <div className="flex flex-row mx-auto content-between gap-x-12 w-max flex-wrap my-12">{mappedReactions}</div>;
}
