import { iLogin } from "../../intefaces";
import User from "../../models/user";
import dbConnect from "../../utils/mongo";
dbConnect()
export const registerUser = async (name:any,email:any,password:any): Promise<iLogin> => {
      let data: iLogin = { data: { success: null, user: null, err: null },error:null }
      try {
            await User.findOne({ email: email }).then(async (user) => {
                  if (user) {
                        data.data = {
                              err:"email is already registered with us"
                        }
                  }
                  else {
                        await new User({
                              name: name,
                              email: email,
                              password:password
                        }).save().then(() => {
                              data.data = {
                                    success:true
                              }
                        })
                  }
            })
      } catch (error) {
            data.error = error
      }
      return data
}