import { iData } from "../../intefaces";
import Jobs from "../../models/jobs";
import dbConnect from "../../utils/mongo";
dbConnect();

export const getAllJobs = async (page: any): Promise<iData> => {
  let data: iData = { data: null, error: null,resultPerPage:null,jobsCount:null };
  try {
    const resultPerPage=20
    const currentPage = Number(page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    const jobs = await Jobs.find({}, { details: 0 }).limit(resultPerPage).skip(skip)
    const counts =await Jobs.countDocuments()
    data.data = {
      jobs: JSON.parse(JSON.stringify(jobs)),
      resultPerPage,
      jobsCount:counts
    };
  
  } catch (err: any) {
    data.error = err?.message;
    console.error(err);
  }
  return data;
};

export const getJobById = async (id: string): Promise<iData> => {
  let data: iData = { data: null, error: null, resultPerPage: null, jobsCount: null };
  try {
    const job = await Jobs.findById(id);
    data.data = { job: JSON.parse(JSON.stringify(job)) };
  } catch (err: any) {
    data.error = err?.message;
    console.error(err);
  }
  return data;
};


