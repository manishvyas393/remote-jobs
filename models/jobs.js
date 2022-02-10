import mongoose from "mongoose"

const jobsDetailSchema = new mongoose.Schema({
      role: {
            type: String,
            default: ""
      },
      company: {
            type: String,
            default: ""
      },
      location: {
            type: String,
            default: ""
      },
      type: {
            type: String,
            default: ""
      },
      field: {
            type: String,
            default: ""
      },
      bids: {
            type: String,
            default: ""
      },
      details: {
            type: String,
            default: ""
      },
      contract: {
            type: String,
            default: ""
      },
      salary: {
            type: String,
            default: ""
      },
      apply_url: {
            type: String
      },
      source: {
            type: String,
            default: ""
      },
      updatedOn: {
            type: String,
            default: ""
      },
      createdon: {
            type: Date,
            default: Date.now()
      },
      active: {
            type: Number,
            default: 1
      }


})
const jobDetails = mongoose.models.job_detail_news||mongoose.model("job_detail_news", jobsDetailSchema)
export default jobDetails