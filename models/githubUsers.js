import mongoose from "mongoose"
const gitHubSchema = new mongoose.Schema({
      github_Id: {
            type: String,
      },
      github_avatar: {
            type: String

      },
      github_Name: {
            type: String,
      },
      github_UserName: {
            type: String,
      },
      github_ProfileUrl: {
            type: String,
      }
})
const githubUsers = mongoose.models.github_users || mongoose.model("github_users", gitHubSchema)
export default githubUsers