import type { NextApiRequest, NextApiResponse } from "next";
import { iLogin } from "../../../intefaces";
import { loginUser, registerUser } from "../../../service/auth";
import bcrypt from "bcryptjs"
import { setCookies,getCookie } from 'cookies-next';
export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse
) {
      let data: iLogin;
      switch (req.method) {
            case "POST":
                  if (req.body.name) {
                        const salt = await bcrypt.genSalt(10)
                        const hasHPassword = await bcrypt.hash(req.body.password, salt)
                        data = await registerUser(req.body.name, req.body.email, hasHPassword);
                        res.status(data.error ? 500 : 200)
                              .json({ data: data.data, err: data.data.err });
                        return;   
                  }
                  if (req.body.loginEmail) {
                        data = await loginUser(req.body.loginEmail, req.body.loginPassword)
                        setCookies('token', data.token, { req, res, maxAge: 60 * 60 * 24 });
                        res.status(data.error ? 500 : 200)
                              .json({ data: data.data, err: data.data.err,token:data.token });
                        return; 
                }
            default:
      }
      res.status(200);
}
