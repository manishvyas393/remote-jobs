import { iForgotPassword } from "../../intefaces";
import User from "../../models/user";
import dbConnect from "../../utils/mongo";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()
const secret = process.env.token_secret_key || "jalpeno";
dbConnect()
interface token{
      id: string,
      exp: number,
      iat:number
}
export const getPasswordResetLink = async (email: any): Promise<iForgotPassword> => {
      let data: iForgotPassword = { data: { success: null, err: null, msg: null }, error: null }
      try {
            await User.findOne({ email: email }).then(async (user) => {
                  if (user) {
                        const token = jwt.sign({
                              id: user.id,
                              exp: Date.now() + 15 * 60 * 1000,
                        }, secret)
                        user.passwordResetToken = token
                        user.save()
                        const transport = nodemailer.createTransport({
                              host: "smtp.gmail.com",
                              port: 465,
                              secure: true,
                              auth: {
                                    user: process.env.email,
                                    pass: process.env.pass
                              }
                        })
                        const options = {
                              to: email,
                              subject: "Reset Password Link",
                              html: `<a href="${process.env.SITE_URL||""}resetpassword/${token}">reset password</a>`
                        }
                        const done = await transport.sendMail(options)
                        if (done.accepted[0] === email) {
                              data.data.success = true;
                              data.data.msg = "Reset Link Send"
                        }
                  }
                  else {
                        data.data.err = "user not found"
                  }

            })
      } catch (error) {
            data.error = error
      }
      return data
}
export const ResetPassword = async (token: any,password:any): Promise<iForgotPassword> => {
      let data: iForgotPassword = { data: { success: null, err: null, msg: null }, error: null }
      try {
            const decodeToken:any = jwt.decode(token)
            console.log(decodeToken.id)
            await User.findOne({ id: decodeToken.id }).then(async (user) => {
                  if (user) {
                        user.password = password;
                        user.passwordResetToken = null;
                        user.save()
                        data.data.success===true
                  }
                  else {
                        data.data.err = "user not found"
                  }

            })
      } catch (error) {
            data.error = error
      }
      return data
}