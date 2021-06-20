import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { EmojiInterface } from "./types";
import getKey from "../../lib/keyGen";

function getRandomRotation() {
  return Math.random() * (30 - 10) + 10;
}

function GhostEmoji({ emoji }: { emoji: EmojiInterface }): JSX.Element {
  return (
    <motion.span
      className="select-none outline-none focus:outline-none text-4xl absolute left-0"
      aria-hidden
      initial={{ opacity: 0, top: 0, scale: 0 }}
      animate={{
        opacity: 0.3,
        top: -300,
        scale: [1, 0.95, 0.93, 0.9, 0.88],
        rotate: [
          -getRandomRotation(),
          getRandomRotation(),
          -getRandomRotation(),
          getRandomRotation(),
        ],
      }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      {emoji.emoji}
    </motion.span>
  );
}

export default function EmojiCounter({
  emoji,
  onClickCallback,
}: {
  emoji: EmojiInterface;
  onClickCallback: (label: string) => void;
}): JSX.Element {
  const [maxReached, setMaxReached] = useState(false);
  const [ghosts, setGhosts] = useState<JSX.Element[]>([]);
  const maxNumberOfInteractions = 10;

  function addGhost() {
    const key = getKey();
    const myGhost = <GhostEmoji emoji={emoji} key={key} />;
    setGhosts((prevGhosts) => {
      const old = [...prevGhosts];
      old.unshift(myGhost);
      return old;
    });
    setTimeout(() => {
      setGhosts((prevGhosts) => {
        const old = [...prevGhosts];
        old.splice(old.indexOf(myGhost), 1);
        return old;
      });
    }, 1000);
  }

  function incrementEmojiCount() {
    if (maxReached) return;
    if (emoji.counter + 1 >= emoji.counter + maxNumberOfInteractions) {
      setMaxReached(true);
      return;
    }
    onClickCallback(emoji.label);
    addGhost();
  }

  return (
    <span className="relative">
      <motion.button
        className={`select-none outline-none focus:outline-none text-4xl ${maxReached ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        style={{ backfaceVisibility: "hidden" }}
        type="button"
        aria-label={emoji.label || "Emoji"}
        onClick={incrementEmojiCount}
        whileHover={maxReached ? {} : { scale: 1.1 }}
        whileTap={maxReached ? {} : { scale: 0.9 }}
      >
        {emoji.emoji}
      </motion.button>{" "}
      <AnimatePresence>{ghosts.map((ghost) => ghost)} </AnimatePresence>
      <div
        className="rounded-full h-8 w-8 flex absolute -top-5 -left-2.5 border border-black border-solid"
        style={{ backgroundColor: "#f55742", color: "#fefefe", zIndex: -5 }}
      >
        <span className="m-auto font-bold select-none">{emoji.counter}</span>
      </div>
    </span>
  );
}
