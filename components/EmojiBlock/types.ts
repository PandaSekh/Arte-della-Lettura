export interface EmojiInterface {
  emoji: string | JSX.Element;
  label: string;
  counter: number;
}

export type FullEmojiInterface = Required<Pick<EmojiInterface, "counter">> & EmojiInterface;
export type EmojiFN = (emoji: EmojiInterface) => void;

export type UseEmoji = [EmojiInterface[], EmojiFN];

export type EmojiiState = EmojiInterface[];
export interface EmojiAction {
  type: "i";
  emoji: EmojiInterface;
}

export interface Reactions {
  [key: string]: number;
}
