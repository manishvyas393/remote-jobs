import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { oauthProviders } from "../../../service/auth"
import dotenv from "dotenv"
dotenv.config()
interface params {
      profile: any,
      account: any
}
export default NextAuth({
      providers: [
            GoogleProvider({
                  clientId: process.env.GOOGLE_ID||"",
                  clientSecret: process.env.GOOGLE_SECRET || "",
            }),

            GitHubProvider({
                  clientId: process.env.GITHUB_ID || "",
                  clientSecret: process.env.GITHUV_SECRET || ""
            })
      ],
      jwt: {
            maxAge: 60 * 60 * 24 * 30,
      },
      secret: process.env.token_secret_key,
      callbacks: {
            async signIn({ account, profile }: params) {
                  await oauthProviders(profile, account)
                  return true
            },
      },
})

