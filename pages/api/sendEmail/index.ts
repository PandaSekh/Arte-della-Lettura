import type { NextApiRequest, NextApiResponse } from "next";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.status(401).json(JSON.stringify(new Error("Invalid path, missing slug")));
};
