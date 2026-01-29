import { z } from "zod";
import { Response, Request, NextFunction } from "express";
export const validateUserInput = (req : Request,res : Response,next : NextFunction) => {
    const schema = z.object({
        name : z.string().trim().min(1).max(50),
        nickName : z.string().min(1).max(50),
        email : z.string().email(),
        password : z.string()
        .min(8)
        .regex(/[A-Z]/,"pass no count upperCase")
        .regex(/[a-z]/,"pass no count lowerCase")
        .regex(/[0-9]/,"pass no count a number")
        .regex(/[^A-Za-z0-9]/, "Must contain special character")
    })

    const data = schema.safeParse(req.body)
    if (!data.success) return res.status(400).json(data.error.message)

    req.body = data.data
    next()
}
export const validateLoginInput = (req : Request,res : Response,next : NextFunction) =>{
    const schema = z.object({
        email : z.string().email(),
        password : z.string()
        .min(8)
        .regex(/[A-Z]/,"pass no count upperCase")
        .regex(/[a-z]/,"pass no count lowerCase")
        .regex(/[0-9]/,"pass no count a number")
        .regex(/[^A-Za-z0-9]/, "Must contain special character")
    })
    const data = schema.safeParse(req.body)
    
    if (!data.success) return res.status(400).json(data.error.message)
    req.body = data.data
    next()
}
