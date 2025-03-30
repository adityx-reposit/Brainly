import { NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from "./config";

export const userMiddleware= (req:Request,res:Response,next:NextFunction)=>{
    //@ts-ignore
    const header= req.headers["authorization"]
     const decoded = jwt.verify(header,JWT_PASSWORD)
     if(decoded){
          //@ts-ignore
        req.userId=decoded.id;
        next()
    } else{
        //@ts-ignore
        res.status(403).json({
            message:"you are not logged IN"
        })
     }
}    