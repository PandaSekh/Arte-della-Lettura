import type { EmojiFN, EmojiInterface } from "./types";

export default function Emoji({ emoji, onClick }: { emoji: EmojiInterface; onClick: EmojiFN }): JSX.Element {
  return (
    <button className="emoji" type="button" aria-label={emoji.label || "Emoji"} onClick={() => onClick(emoji)}>
      {emoji.emoji}
    </button>
  );
}
