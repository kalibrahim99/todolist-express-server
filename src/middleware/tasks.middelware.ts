import { z } from "zod"
import { Response, Request, NextFunction} from "express"

export const validateTaskRequst = (req : Request,res : Response,next : NextFunction) => {

    const shema = z.object({
        name : z.string().min(1),
        id : z.coerce.number()
    })


    const data = shema.safeParse(req.body);

    if (!data.success) return res.status(400).json(data.error.message)
    req.body = data.data

    next()
}