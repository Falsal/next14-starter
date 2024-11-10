// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//     username:{
//         type: String,
//         required: true,
//         unique: true,
//         min: 3,
//         max: 20,
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true,
//         max: 50,
//     },
//     password:{
//         type: String,
//         required: true,
//         min: 6,
//     },
//     img:{
//         type: String
//     },
//     isAdmin:{
//         type: Boolean,
//         default: false,
//     }
// }, 
// // {timestamps: { type: Date, default: Date.now }}
// {timestamps: true}
// // lastModified: new Timestamp(1, Math.floor(new Date().getTime() / 1000)) 
// )


// const postSchema = mongoose.Schema({
//     title:{
//         type: String,
//         required: true,
//     },
//     desc:{
//         type: String,
//         required: true,
//         max: 550,
//     },
//     img:{
//         type: String
//     },
//     userId:{
//         type: String,
//         required: true,
//     },
//     slug:{
//         type: String,
//         required: true,
//         unique: true,
//     }
// }, 
// // {timestamps: { type: Date, default: Date.now }}
// {timestamps: true}

// )

// export const User = mongoose.models.User || mongoose.model("User", userSchema);
// export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

// Error: using the above code
//TypeError: Cannot read properties of undefined (reading 'User')

// ChatGpt: Webpack can sometimes create issues with mongoose.model caching in development, especially if there are recent changes. We can try the following in models.js:
// Refactor Model Definitions: Use a different approach for defining and exporting the User and Post models to avoid relying solely on mongoose.models. This will force Mongoose to initialize the models fresh each time.

import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 6 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true, max: 550 },
    img: { type: String },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Define models conditionally
const User = models?.User || model("User", userSchema);
const Post = models?.Post || model("Post", postSchema);

// Export
export { User, Post };
