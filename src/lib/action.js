import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData)=>{
    "use server"
    
    // restructuring method
    const {title, desc, slug, userId} = Object.fromEntries(formData);

    console.log("input values: ",title, desc, slug, userId)

    try {
        connectToDb();

        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }


    
    
}

export const deletePost = async (formData)=>{
    "use server"
    
    const {id} = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("Removed from db");
        revalidatePath("/blog");
    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }   
}