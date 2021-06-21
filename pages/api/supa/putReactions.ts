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
  console.log("putReactions request")
  if (supabaseUrl && supabaseKey) {
    const emoji: SupaEmoji = req.body;
    console.log("Received emoji: ", emoji)
    const supabaseClient = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabaseClient
      .from<SupaEmoji>("reactions")
      .upsert(emoji);

    if (error) {
      res.status(500).json(JSON.stringify(error));
    }
    res.status(204);
  } else res.status(500).json("Missing env variables");
};
