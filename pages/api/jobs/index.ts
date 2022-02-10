import type { NextApiRequest, NextApiResponse } from "next";
import { iData } from "../../../intefaces";
import { getAllJobs } from "../../../service/jobs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data: iData;
  switch (req.method) {
    case "GET":
      data = await getAllJobs();
      res
        .status(data.error ? 500 : 200)
        .json({ data: data.data, err: data.error });
      return;
    default:
  }
  res.status(200);
}
