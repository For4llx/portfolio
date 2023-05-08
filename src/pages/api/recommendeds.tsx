// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "/home/nobimeromeo/Documents/projects/entertainment-web-app/data/data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const trendingContent = data.filter(
    (content) => content.isTrending === false
  );
  res.status(200).json(trendingContent);
}
