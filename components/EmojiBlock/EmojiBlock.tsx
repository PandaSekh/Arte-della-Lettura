/* eslint-disable no-param-reassign */
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import config from "website.config.json";
import LoadingComponent from "../Loaders/LoadingSpinner";
import EmojiCounter from "./EmojiCounter";
import type { SupaEmoji } from "./types";

let delayDebounceFn: NodeJS.Timeout;

export default function EmojiBlock({ slug }: { slug: string }): JSX.Element {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPA_KEY;
  let supabase: SupabaseClient;
  const [emojis, setReactions] = useState<SupaEmoji | null>(null);

  useEffect(() => {
    const getReactions = async () => {
      if (supabaseUrl && supabaseKey) {
        supabase = createClient(supabaseUrl, supabaseKey);
        const { data: reactionsDB, error } = await supabase
          .from<SupaEmoji>("reactions")
          .select("*")
          .eq("post_slug", slug);
        if (error || !reactionsDB) {
          throw new Error(error?.message || "No reactions found");
        } else {
          setReactions(reactionsDB[0]);
        }
      } else throw new Error("Issue with env");
    };

    getReactions();
  }, []);

  async function updateDB(emojiToBeUpdated: SupaEmoji) {
    console.log("updateDB called");
    fetch(`${config.baseurl}/api/supa/putReaction`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(emojiToBeUpdated),
    });
  }

  useEffect(() => {
    clearTimeout(delayDebounceFn);
    delayDebounceFn = setTimeout(() => {
      if (emojis) {
        updateDB(emojis);
      }
    }, 1000);
  }, [emojis]);

  function onClickEmoji(emojiLabel: string) {
    setReactions((prevState) => {
      if (prevState) {
        switch (emojiLabel) {
          case "libro":
            prevState.libro += 1;
            break;
          case "estasiato":
            prevState.estasiato += 1;
            break;
          case "risata":
            prevState.risata += 1;
            break;
          case "assonnato":
            prevState.assonnato += 1;
            break;
          case "furioso":
            prevState.furioso += 1;
            break;
          case "preoccupato":
            prevState.preoccupato += 1;
            break;
          default:
            break;
        }
        return prevState;
      }
      return prevState;
    });
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
