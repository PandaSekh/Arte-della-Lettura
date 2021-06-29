import { useEffect, useState } from "react";
import type { SupaEmoji } from "@interfaces/Reactions";
import LoadingComponent from "../Loaders/LoadingSpinner";
import EmojiCounter from "./EmojiCounter";

let delayDebounceFn: NodeJS.Timeout;
let isFirstRender = true;

export default function EmojiBlock({ slug }: { slug: string }): JSX.Element {
  const [emojis, setEmojis] = useState<SupaEmoji>();

  useEffect(() => {
    fetch(`/api/supa/getReactions/${slug}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } throw new Error("No data")
      }).then(json => setEmojis(json))
      .catch(async () => {
        setEmojis({
          post_slug: slug,
          libro: 0,
          risata: 0,
          estasiato: 0,
          assonnato: 0,
          furioso: 0,
          preoccupato: 0
        })
      });
  }, [])

  async function updateDB(emojiToBeUpdated: SupaEmoji) {
    if (!isFirstRender) {
      fetch(`/api/supa/putReactions`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(emojiToBeUpdated),
      });
    }
    isFirstRender = false;
  }

  useEffect(() => {
    clearTimeout(delayDebounceFn);
    delayDebounceFn = setTimeout(() => {
      if (emojis) {
        updateDB(emojis);
      }
    }, 1500);
  }, [emojis]);

  function getData(label: string) {
    if (emojis) {
      const newEmojis = { ...emojis }
      switch (label) {
        case "libro":
          newEmojis.libro += 1;
          break;
        case "estasiato":
          newEmojis.estasiato += 1;
          break;
        case "risata":
          newEmojis.risata += 1;
          break;
        case "assonnato":
          newEmojis.assonnato += 1;
          break;
        case "furioso":
          newEmojis.furioso += 1;
          break;
        case "preoccupato":
          newEmojis.preoccupato += 1;
          break;
        default:
          break;
      }
      return newEmojis
    } return undefined;
  }

  function onClickEmoji(emojiLabel: string) {
    const data = getData(emojiLabel)
    if (data) {
      setEmojis(data);
    }
  }

  return (
    <>
      {emojis ? (
        <div className="flex flex-row mx-auto content-between gap-12 flex-wrap my-12 justify-center	px-4">
          <EmojiCounter
            key="libro"
            emoji={{
              emoji: "📚",
              label: "libro",
              counter: emojis.libro,
            }}
            onClickCallback={onClickEmoji}
          />
          <EmojiCounter
            key="estasiato"
            emoji={{
              emoji: "🤩",
              label: "estasiato",
              counter: emojis.estasiato,
            }}
            onClickCallback={onClickEmoji}
          />
          <EmojiCounter
            key="risata"
            emoji={{
              emoji: "🤣",
              label: "risata",
              counter: emojis.risata,
            }}
            onClickCallback={onClickEmoji}
          />
          <EmojiCounter
            key="assonnato"
            emoji={{
              emoji: "😪",
              label: "assonnato",
              counter: emojis.assonnato,
            }}
            onClickCallback={onClickEmoji}
          />
          <EmojiCounter
            key="furioso"
            emoji={{
              emoji: "😤",
              label: "furioso",
              counter: emojis.furioso,
            }}
            onClickCallback={onClickEmoji}
          />
          <EmojiCounter
            key="preoccupato"
            emoji={{
              emoji: "😰",
              label: "preoccupato",
              counter: emojis.preoccupato,
            }}
            onClickCallback={onClickEmoji}
          />
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
