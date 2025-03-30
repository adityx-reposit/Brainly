// create user model 
import mongoose, { Model, Schema, model } from "mongoose"

mongoose.connect('mongodb+srv://adityx:Aditya%4022@cluster0.grv2e.mongodb.net/SecondBrain')

const userSchema= new Schema({
    username:{type:String,unique:true},
    password:String
})


export const userModel=  model("Users",userSchema);

const contentSchema= new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId,ref:'Users', required:true}
})

  export const contentModel= model("content", contentSchema);