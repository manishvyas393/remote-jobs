import { iLogin } from "../../intefaces";
import User from "../../models/user";
import GoogleUsers from "../../models/googleUsers"
import GithubUsers from "../../models/githubUsers"
import dbConnect from "../../utils/mongo";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
dbConnect()
export const registerUser = async (name: any, email: any, password: any): Promise<iLogin> => {
      let data: iLogin = { data: { success: null, user: null, err: null }, error: null, token: null }
      try {
            await User.findOne({ email: email }).then(async (user) => {
                  if (user) {
                        data.data = {
                              err: "email is already registered with us"
                        }
                  }
                  else {
                        await new User({
                              name: name,
                              email: email,
                              password: password
                        }).save().then(() => {
                              data.data = {
                                    success: true
                              }
                        })
                  }
            })
      } catch (error) {
            data.error = error
      }
      return data
}
export const loginUser = async (email: any, password: any): Promise<iLogin> => {
      let data: iLogin = { data: { success: null, user: null, err: null }, error: null, token: null }
      const secret = "qwertyuioppoiuytrewq"
      try {
            await User.findOne({ email: email }).then(async (user: any) => {
                  if (user) {
                        const validPassword = await bcrypt.compare(password, user.password);
                        if (validPassword) {
                              const token = jwt.sign({
                                    id: user.id
                              }, secret)
                              data.token = token
                              data.data.success = true
                        }
                        else {
                              data.data.err = "Password Not Matched"
                        }
                  }
                  else {
                        data.data.err = "User not Found"
                  }
            })

      } catch (error) {
            data.error = error
      }
      return data
}
export const oauthProviders = async (profile: any, account: any) => {
      if (account.provider === "google") {
            const user = new GoogleUsers({
                  email: profile.email,
                  picture: profile.picture,
                  name: profile.name,
                  email_verified: profile.email_verified
            })
            await user.save()
      }
      if (account.provider === "github") {
            const user = new GithubUsers({
                  github_Id: profile.id,
                  github_avatar: profile.avatar_url,
                  github_Name: profile.name,
                  github_UserName: profile.login,
                  github_ProfileUrl: profile.html_url
            })
            await user.save()
      }
}