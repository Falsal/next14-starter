"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost = async (formData)=>{
    
    
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

export const register = async (formData) => {

    const {username, email, img, password, passwordRepeat} = Object.fromEntries(formData);
    console.log("password :", password)
    console.log("passwordRepeat :", passwordRepeat)
    
    if(password !== passwordRepeat){
        console.log("Passwords do not match")
        return "Passwords do not match !"
    }

    try {
        await connectToDb();

        const user = await User.findOne({username})

        if(user){
            console.log("Username already exist !")
            return "Username already exist !"
        }

        const newUser = new User({
            username : username,
            email : email,
            password : password,
            img: img
        });

        console.log("newUser :", newUser)

        await newUser.save();

        console.log(`saved ${username} to Dbase`);
        
    } catch (error) {
        console.log(error);
        return false;
    }
}