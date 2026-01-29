import jwt from "jsonwebtoken"
import { Response, NextFunction } from "express"
import { authRequest, userPayload } from "../interfaces";
export const authUser = (req : authRequest,res : Response,next : NextFunction) => {
    try{

    const checkheader = req.headers.authorization as string

    if(!checkheader) return res.status(401).json({message : "you dont have acccess"}) 

    const token = checkheader.split(" ")[1];
    const secret = process.env.JWT_SECRET as string;

    if (token === undefined) return res.status(401).json({message : "not found authorization"})
    if (!secret) return res.status(404).json({message : "not found secret"})

    const decode = jwt.verify(token, secret)
    req.user = decode as userPayload;
    
    next()
    
    }
    catch(error : any) {
        res.status(403).json({message : error.message})
    }

}