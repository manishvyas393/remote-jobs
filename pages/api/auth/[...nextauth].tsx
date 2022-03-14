import dotenv from "dotenv"
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { oauthProviders } from "../../../service/auth"
dotenv.config()
interface params {
      profile: any,
      account: any
}
export default NextAuth({
      providers: [
            GoogleProvider({
                  clientId: process.env.GOOGLE_ID || "756066472582-kg8r5ebi37k7rk2il6lsmbilmlmb68id.apps.googleusercontent.com",
                  clientSecret: process.env.GOOGLE_SECRET || "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",
            }),

            GitHubProvider({
                  clientId: process.env.GITHUB_ID || "016d6c8bd11d0aa3f74a",
                  clientSecret: process.env.GITHUV_SECRET || "faf565c76b9d99a3d2cd72fb7ff69bcfd939c21c"
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

