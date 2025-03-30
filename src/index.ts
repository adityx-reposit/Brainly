import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { contentModel, userModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';

const app=express()
const mongo=


app.use(express.json())

app.post('/api/v1/signup',async(req,res)=>{

   const username=req.body.username;
   const password = req.body.password;

try{
await userModel.create({
    username:username,
    password:password
})

res.json({
    message:"User Succesfully signed In "
})
} catch(e){
    res.status(411).json({
        message:"user already existed"
    })
}
})

app.post('/api/v1/signin',async(req,res)=>{
       const username = req.body.username;
       const password= req.body.password;

       const existingUser=await userModel.findOne({
        username:username,
        password:password
       })


       if(existingUser){
      const token = jwt.sign({
        id:existingUser._id
      },JWT_PASSWORD)
      res.json({
        token:token
      })

    }
    else{
        res.status(411).json({
            message:"username/password is incoreect"
        })
    }

    })
//@ts-ignore
app.post('/api/v1/content',userMiddleware,async(req,res)=>{

const link = req.body.link;
const type= req.body.type;
await contentModel.create({
    link,
    type,
    tags:[],
    //@ts-ignore
    userId:req.userId
})


res.json({
    message:"content Added"
})
})
//@ts-ignore
app.get("/api/v1/content",userMiddleware,async (req,res)=>{
    //@ts-ignore
    const userId= req.userId;
    const content=await contentModel.find({
        userId:userId
    }).populate("userId","username")

    res.json({
        content:content
    })
})
//@ts-ignore
app.delete('/api/v1/content',userMiddleware,async(req,res)=>{
   const content = req.body.contentId;

   await contentModel.deleteMany({

       content,
       //@ts-ignore
      userId:req,userId
   })

   res.json({
    message:"deleted"
   })
})
app.post('/api/v1/brain/share',(req,res)=>{


})

app.get('/api/v1/brain/:shareLink',(req,res)=>{


})


app.listen(3000);