import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { SupaEmoji } from "components/EmojiBlock/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_KEY;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  console.log("PutReaction request");
  if (supabaseUrl && supabaseKey) {
    const emoji: SupaEmoji = req.body;
    const supabaseClient = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabaseClient
      .from<SupaEmoji>("reactions")
      .upsert(emoji);

    if (error) {
      res.status(500).json(JSON.stringify(error));
    }
    console.log("Database updated ", data);
    res.status(204);
  } else res.status(500).json("Missing env variables");
};
