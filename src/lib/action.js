"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState, formData)=>{
    
    
    // restructuring method
    const {title, desc, slug, userId, img} = Object.fromEntries(formData);

    console.log("input values: ",title, desc, slug, userId, img)

    try {
        await connectToDb();

        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }    
}

export const deletePost = async (formData)=>{
    
    
    const {id} = Object.fromEntries(formData);

    try {
        await connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("Removed from db");
        revalidatePath("/blog");
        revalidatePath("/admin");

    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }   
}

export const addUser = async (prevState,formData)=>{
    
    // restructuring method
    const {username,email,password, img} = Object.fromEntries(formData);

    console.log("input values: ",username, email, password, img)

    try {
        await connectToDb();

        const newUser = new User({
            username,
            email,
            password,
            img
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }    
}

export const deleteUser = async (formData)=>{
    
    const {id} = Object.fromEntries(formData);

    try {
        await connectToDb();
        await Post.deleteMany({userId: id})
        await User.findByIdAndDelete(id);
        console.log("Removed user from db");
        revalidatePath("/admin");
    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }   
}

export  const handleGithubLogin = async ()=>{
    
    await signIn("github");
}


export  const handleLogout = async ()=>{

    await signOut();
}

export const register = async (previousState, formData) => {

    const {username, email, img, password, passwordRepeat} = Object.fromEntries(formData);
    // console.log("password :", password)
    // console.log("passwordRepeat :", passwordRepeat)
    
    if(password !== passwordRepeat){
        console.log("action/register -->  Passwords do not match")
        return {error: "Passwords do not match !"} ; // this type of error object will be assigned to the state in the registerForm component (value of state.error)        
    }

    try {
        await connectToDb();

        const user = await User.findOne({username})

        if(user){
            console.log("Username already exist !")
            return {error: "Username already exist !"} ; // this type of error object will be assigned to the state in the registerForm component (value of state.error)
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username : username,
            email : email,
            password : hashedPassword,
            img: img
        });

        await newUser.save();

        console.log(`saved ${username} to Dbase`);

        return { success : true } ; //this object will appear as the value of "state.success" in the registerForm component
        
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong!"};
    }
}

export const login = async (prevState, formData) => {

    const {username,password} = Object.fromEntries(formData);
    console.log("action.js / login ")
   
    try {
        
        await signIn("credentials",{username,password, redirect: false}); 
        // the "redirect: false" parameter prevents automatic redirection AND the NEXT_REDIRECT error 
        
    } catch (error) {
        console.log("signIn error, /***** THIS IS AN ERROR FROM LOGIN ****/ ")
        console.log(error);

        if(error.type === "CredentialsSignin") {
            return {error: "Invalid username or password"}
        }
   
        return {error: "Something went wrong during login!"}; 

        // throw error; // this line was suggested as alternative to returning error above to avoid getting the NEXT_REDIRECT error, but this did not work in my version here , only removing the automatic redirect did work.
        
    }
}