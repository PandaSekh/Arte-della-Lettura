import { useReducer } from "react";
import type {
  EmojiAction,
  EmojiFN,
  EmojiiState,
  FullEmojiInterface,
  EmojiInterface,
  UseEmoji,
} from "./types";

function reducer(state: EmojiiState, action: EmojiAction) {
  const { emoji } = action;
  const stateEmoji = state.find(
    (em: EmojiInterface) => em.emoji === emoji.emoji
  );
  const emojiFromState = stateEmoji || emoji;
  emojiFromState.counter = emojiFromState.counter || 0;
  switch (action.type) {
    case "i":
      emojiFromState.counter += 1;
      break;
    default:
      break;
  }

  if (!stateEmoji) {
    state.push(emojiFromState);
  }

  return state
    .map((rea: EmojiInterface) => {
      return (
        rea.emoji === emojiFromState.emoji ? emojiFromState : rea
      ) as FullEmojiInterface;
    })
    .filter(
      (filteredEmoji: EmojiInterface) => filteredEmoji.counter > 0
    ) as FullEmojiInterface[];
}

export default function useEmojis(
  initialEmojis: EmojiInterface[] = []
): UseEmoji {
  const [emojis, dispatch] = useReducer(reducer, [
    ...initialEmojis,
    /* Forces correct typing of state, but still accepts inital state without counter. */
  ] as FullEmojiInterface[]);
  const increment: EmojiFN = (emoji: EmojiInterface) =>
    dispatch({ type: "i", emoji });
  return [emojis, increment];
}
