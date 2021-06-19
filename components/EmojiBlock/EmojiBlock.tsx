import defaults from "./defaultEmojis.json";
import EmojiCounter from "./EmojiCounter";

import type { EmojiInterface } from "./types";

export default function EmojiBlock({
  emojis,
  slug,
}: {
  emojis: Array<EmojiInterface> | null;
  slug: string;
}): JSX.Element {
  const fullEmojis = defaults.map((emoji) => {
    const emojiFromData = emojis?.find(
      (emojiData) => emojiData.label === emoji.label
    );
    const emojiFromDefaults = emoji;
    emojiFromDefaults.counter = emojiFromData?.counter || 0;
    return emojiFromDefaults;
  });

  const mappedReactions = fullEmojis.map((emoji) => (
    <EmojiCounter
      key={emoji.label}
      emoji={emoji}
      value={emoji.counter}
      slug={slug}
    />
  ));

  return (
    <div className="flex flex-row mx-auto content-between gap-12 flex-wrap my-12 justify-center	px-4">
      {mappedReactions}
    </div>
  );
}
