import { Post, User } from "./models";
import { connectToDb } from "./utils";



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

    // // Log the entire post object
    // console.log("Fetched post object:", post);

    // // Directly log createdAt to check access
    // console.log("Accessing createdAt directly:", post.createdAt);

    // // Check if createdAt is defined
    // if (post.createdAt === undefined) {
    //   console.error("createdAt is undefined in the fetched post object.");
    // } else {
    //   console.log("Raw createdAt value:", post.createdAt);
    //   console.log("Type of createdAt:", typeof post.createdAt); // Should be 'object'

    //   // Check if createdAt is a Date instance
    //   if (post.createdAt instanceof Date) {
    //     // Now convert to locale date string
    //     post.createdAt = post.createdAt.toLocaleDateString();
    //   } else {
    //     console.error("Invalid date format for createdAt:", post.createdAt);
    //   }

    //   console.log("Formatted post.createdAt:", post.createdAt); // Should show formatted date
    // }


    return post;

  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch the single post with id: ${slug} !`);
    
  }
}

export const getUsers = async ()=>{
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

