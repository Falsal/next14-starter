// Auth config file and Object
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt"
import { authConfig } from "./auth.config";

const login = async (credentials) =>{
  // console.log("inside auth.js /login")
  //received credentials:
  // {
  //   username: 'Vitorio',
  //   password: '1234',
  //   callbackUrl: 'http://localhost:3000/login'
  // }
  // console.log("credentials L10:")
  // console.log(credentials)
  try {
    connectToDb();
    const user = await User.findOne({username: credentials.username});
    // console.log("user L15:")
    // user ? console.log(user) : console.log("L16: No user returned");
    // Output : 
    // {
    //   _id: new ObjectId('6732697d0b70bd99c249a8fd'),
    //   username: 'Vitorio',
    //   email: 'vitorio@gmail.com',
    //   password: '$2b$10$C9Gli95KkOsOn78WSxXLg.Q422Kl7KoPcISYYIa4GD20ADDxXDm7e',
    //   isAdmin: false,
    //   createdAt: 2024-11-11T20:30:53.351Z,
    //   updatedAt: 2024-11-11T20:30:53.351Z,
    //   __v: 0
    // }
    if(!user){
      throw new Error("Wrong credentials / no user found ");
    }
    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password) ;

    // console.log("auth.js/login , isPasswordCorrect L20 :", isPasswordCorrect)

    if(!isPasswordCorrect){
      throw new Error("Wrong credentials");
    }
    // console.log("user L25 : ", user) ; // same as the clg on L15
    return user;

  } catch (error) {
    console.log(error);
    throw new Error("Failed login");
    
  }
}

export const { handlers : {GET,POST}, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials){
      //  console.log("authorize(credentials) L43/ credentials :")
      //  console.log(credentials)
        try {
          const user = await login(credentials)

          // console.log("auth.js/authorize user :", user)

          // Return a minimal user object for NextAuth
        return user
          
        } catch (error) {
          console.error("Authorize error:", error.message);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({user, account, profile}){
      // console.log("inside auth.js/ signIn/ callbacks ");
      // console.log("signIn callback account.provider:", account.provider);
      console.log("signIn callback user:", user);
      console.log("signIn callback account:", account);
  
      // if (account.provider === "credentials" && !user) {
      //   console.log("AccessDenied: No user returned by credentials provider");
      //   return false; // Reject sign-in
      // }

      if(account.provider === "github"){
        connectToDb();
        try {
          const user = await User.findOne({email : profile.email});
          if(!user){
            console.log("NO USER FOUND so create one !")
            const newUser = new User({
              username : profile.login, //login replaces username in github profile object
              email: profile.email,
              image: profile.avatar_url
            })
          
            await newUser.save();
          }          
        } catch (error) {
          console.log(error);
          return false
        }
      }

      return true;
    },
    ...authConfig.callbacks, // must be included, otherwise will be overwritten
  },
});