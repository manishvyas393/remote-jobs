import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongo";
import { getJobById } from "../../../service/jobs";
dbConnect();
type Data = {
  jobs: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    const job = await getJobById(String(id));
    if (job.data) {
      res.status(200).json(job);
    }
  }
  res.status(200);
}
