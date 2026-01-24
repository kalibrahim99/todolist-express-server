import { z } from "zod"
import { Response, Request, NextFunction } from "express"



export const validateTaskRequest = (req : Request,res : Response,next : NextFunction) => {

    const shema = z.object({
        name : z.string().min(1),
    })

    const data = shema.safeParse(req.body);

    if(!data.success) return res.status(400).json(data.error.message)
    req.body = data.data

    next()
}

export const validateParamsRequest = (req : Request,res : Response, next : NextFunction) => {
    
    const shema = z.object({
      name : z.string().min(1)
    })

    const id = shema.safeParse(req.params);
    if (!id.success) return res.status(400).json(id.error.message)
    
    next()
}


export const validateUpdateRequest = (req : Request,res : Response,next : NextFunction) => {

    const shema = z.object({
        newName : z.string().min(1),
    })

    const data = shema.safeParse(req.body);

    if(!data.success) return res.status(400).json(data.error.message)
    req.body = data.data
    

    next()
}