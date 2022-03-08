import type { NextApiRequest, NextApiResponse } from "next";
import { iLogin } from "../../../intefaces";
import { registerUser } from "../../../service/auth";
import bcrypt from "bcryptjs"
export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse
) {
      let data: iLogin;
      switch (req.method) {
            case "POST":
                  const salt = await bcrypt.genSalt(10)
                  const hasHPassword = await bcrypt.hash(req.body.password, salt)
                  data = await registerUser(req.body.name, req.body.email,hasHPassword);
                  res.status(data.error ? 500 : 200)
                        .json({ data: data.data, err: data.data.err });
                  return;
            default:
      }
      res.status(200);
}
