// /* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { SupaEmoji } from "@interfaces/Reactions";

const supabaseUrl = process.env.SUPA_URL;
const supabaseKey = process.env.SUPA_KEY;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log("putReactions request")
    if (supabaseUrl && supabaseKey) {
      const emoji: SupaEmoji = req.body;
      console.log("Received emoji: ", emoji)
      const supabaseClient = createClient(supabaseUrl, supabaseKey);
      // const { data, error } = await supabaseClient
      //   .from<SupaEmoji>("reactions")
      //   .upsert(emoji)
      supabaseClient
        .from<SupaEmoji>("reactions")
        .upsert(emoji)
        .then(({ data, error }) => {
          if (error) {
            console.error("Error -> ", error)
            res.status(500).json(JSON.stringify(error));
            reject();
          } else {
            console.log("Database update: ", data);
            res.status(204);
            resolve();
          }
        })
    }
    res.status(500).json("Missing env variables");
    reject();
  })
};

// export default async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> => {
//   return new Promise((resolve, reject) => {
//     console.log("putReactions request")
//     if (supabaseUrl && supabaseKey) {
//       const emoji: SupaEmoji = req.body;
//       console.log("Received emoji: ", emoji)
//       const supabaseClient = createClient(supabaseUrl, supabaseKey);
//       const { data, error } = await supabaseClient
//         .from<SupaEmoji>("reactions")
//         .upsert(emoji);

//       console.log("Database update: ", data);

//       if (error) {
//         console.error(error)
//         res.status(500).json(JSON.stringify(error));
//         reject();
//       }
//       res.status(204);
//       resolve();
//     } else {
//       res.status(500).json("Missing env variables");
//       reject();
//     };
//   })
// };
