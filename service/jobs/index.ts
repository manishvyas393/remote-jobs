import { iData } from "../../intefaces";
import Jobs from "../../models/jobs";
import dbConnect from "../../utils/mongo";
dbConnect();

export const getAllJobs = async (): Promise<iData> => {
  let data: iData = { data: null, error: null };
  try {
    const jobs = await Jobs.find({}, { details: 0 }).limit(8)
    data.data = { jobs: JSON.parse(JSON.stringify(jobs)) };
  } catch (err: any) {
    data.error = err?.message;
    console.error(err);
  }
  return data;
};

export const getJobById = async (id: string): Promise<iData> => {
  let data: iData = { data: null, error: null };
  try {
    const job = await Jobs.findById(id);
    data.data = { job: JSON.parse(JSON.stringify(job)) };
  } catch (err: any) {
    data.error = err?.message;
    console.error(err);
  }
  return data;
};


