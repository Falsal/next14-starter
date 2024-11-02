import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password:{
        type: String,
        required: true,
        min: 6,
    },
    img:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
}, 
// {timestamps: { type: Date, default: Date.now }}
{timestamps: true}
// lastModified: new Timestamp(1, Math.floor(new Date().getTime() / 1000)) 
)


const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
        max: 550,
    },
    img:{
        type: String
    },
    userId:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    }
}, 
// {timestamps: { type: Date, default: Date.now }}
{timestamps: true}

)

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);