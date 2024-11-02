import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData)=>{
    "use server"

    // basic method for extracting form input values
    // const title = formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")
    // const userId = formData.get("userId")
    
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
        console.log("saved to db")
    } catch (error) {
        throw new Error("Somthing went wrong !");
        
    }


    
    
}