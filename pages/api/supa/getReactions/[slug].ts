/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { SupaEmoji } from "components/EmojiBlock/types";

const supabaseUrl = process.env.SUPA_URL;
const supabaseKey = process.env.SUPA_KEY;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { slug } = req.query;
  console.log("getReactions for page ", slug)
  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data: reactions, error } = await supabase
      .from<SupaEmoji>("reactions")
      .select("*")
      .eq("post_slug", slug as string);
    if (error || !reactions) {
      res.status(404).json("Nothing found");
    } else {
      console.log("Data received from database: ", JSON.stringify(reactions, null, 2))
      res.status(200).json(JSON.stringify(reactions[0]))
    }
  } else res.status(500).json("Invalid env variables");
};
