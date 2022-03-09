import { iLogin } from "../../intefaces";
import User from "../../models/user";
import dbConnect from "../../utils/mongo";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
dbConnect()
export const registerUser = async (name: any, email: any, password: any): Promise<iLogin> => {
      let data: iLogin = { data: { success: null, user: null, err: null }, error: null,token:null }
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
      let data: iLogin = { data: { success: null, user: null, err: null }, error: null,token:null }
      const secret = "qwertyuioppoiuytrewq"
      try {
            await User.findOne({ email: email }).then(async(user: any) => {
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