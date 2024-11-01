import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";



export const getPosts = async ()=>{
    try {
      connectToDb();
      const posts = await Post.find();
      return posts;

    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch posts !");
      
    }
}
export const getPost = async (slug)=>{
  try {
    connectToDb();
    // Fetch the post using lean() to get a plain object
    const post = await Post.findOne({slug}).lean();  // when using a simple "find" we get back an array

    // Check if post was found
    if (!post) {
      console.error(`No post found with slug: ${slug}`);
      throw new Error(`Post not found with slug: ${slug}`);
    }

    return post;

  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch the single post with id: ${slug} !`);
    
  }
}

export const getUsers = async ()=>{
  noStore();
  
  try {
    connectToDb();
    const users = await User.find(); 
    return users;

  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch the users !`);
    
  }
}

export const getUser = async (id)=>{
  try {
    connectToDb();
    const user = await User.findById(id); 
    return user;

  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch the user with id: ${id}! `);
  }
}

