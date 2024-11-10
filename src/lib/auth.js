// Auth config file and Object
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { User } from "./models";
import { connectToDb } from "./utils";

export const { handlers : {POST, GET}, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({user, account, profile}){
      // console.log("username :", user)
      // console.log("account :", account)
      console.log("profile :");
      console.log(profile)

      if(account.provider === "github"){
        connectToDb();
        try {
          const user = await User.findOne({email : profile.email});
          if(!user){
            console.log("NO USER FOUND !")
            const newUser = new User({
              username : profile.login,
              email: profile.email,
              image: profile.avatar_url
            })
            // await console.log("newUser ----")
            // await console.log("username :", newUser.username)
            // await console.log("email :", newUser.email)
            // await console.log("image :", newUser.image)

            await newUser.save();
          }          
        } catch (error) {
          console.log(error);
          return false
        }
        
        return true;
      }
    }
  }
});