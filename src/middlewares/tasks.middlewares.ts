import {  z } from "zod"
import Task from "../interfaces";
import { Response, Request, NextFunction } from "express";


export const validateTaskdata = (req : Request,res : Response, next : NextFunction) => {
    
    const addTaskSchema = z.object({
        name: z.string().min(1),
        id: z.coerce.number()
      });
      
      const data = addTaskSchema.safeParse(req.body)

      
        if (!data.success) {
          return res.status(400).json(data.error.message)

        }
        
      req.body = data.data  
      next()
}