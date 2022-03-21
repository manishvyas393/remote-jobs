import { iForgotPassword } from "../../intefaces";
import User from "../../models/user";
import dbConnect from "../../utils/mongo";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()
const secret = process.env.token_secret_key || "jalpeno";
dbConnect()
export const getPasswordResetLink = async (email: any): Promise<iForgotPassword> => {
      let data: iForgotPassword = { data: { success: null, err: null, msg: null }, error: null }
      try {
            await User.findOne({ email: email }).then(async (user) => {
                  if (user) {
                        const token = jwt.sign({
                              id: user.id,
                              exp: Date.now() + 5 * 60 * 1000,
                              iat: Date.now()
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
                              from: process.env.email,
                              to: email,
                              subject: "Reset Password Link",
                              html: `<a href="${process.env.SITE_URL || ""}resetpassword/${token}">reset password</a>`
                        }
                        const res = await transport.sendMail(options)
                              if (res.accepted[0] === email) {
                                    data.data.success = true;
                                    data.data.msg = "Link send it will expire in 5 minutes"
                              }
                              else {
                                    data.data.error = "server down"
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
export const ResetPassword = async (token: any, password: any): Promise<iForgotPassword> => {
      let data: iForgotPassword = { data: { success: null, err: null, msg: null }, error: null }
      try {
            const decodeToken: any = jwt.decode(token)
            await User.findOne({ id: decodeToken.id }).then(async (user) => {
                  if (user && user.passwordResetToken) {
                        let decodeUserToken: any = jwt.decode(user.passwordResetToken)
                        let curTime = new Date(Date.now()).toLocaleTimeString()
                        let expTime = new Date(decodeUserToken.exp).toLocaleTimeString()
                        if (expTime > curTime) {
                              user.password = password;
                              user.passwordResetToken = null;
                              user.save()
                              data.data.success = true
                        }
                        else {
                              user.passwordResetToken = null;
                              user.save()
                              data.data.err = "link expired"
                        }
                  }
                  else {
                        data.data.err = "invalid Token"
                  }

            })
      } catch (error) {
            data.error = error
      }
      return data
}