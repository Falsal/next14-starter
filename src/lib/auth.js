// Auth config file and Object
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
export const { handlers : {POST, GET}, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});