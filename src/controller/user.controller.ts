import { Response, Request} from "express";
import { User } from "../models/user.models";
import { addUser, checkUser, makeUserToken } from "../services/user.services";
import bcrypt from "bcrypt"

export const login = async (req : Request, res : Response) => {
    try{
        const {email, password} = req.body
        const resultOfCheck = await checkUser(email,password);
        const token = makeUserToken(resultOfCheck.userInfo)
        res.status(200).json({message : resultOfCheck.message, token : token,name : resultOfCheck.userInfo.name})
    } 
    catch (error : any){
        if (error.message === "INVALID_EMAIL") {
            return res.status(404).json({message : "the password or email wrong"})
        }
        else if(error.message === "INVALID_PASSWORD") {
            return res.status(404).json({message : "the password or email wrong"})
        }
    }
}

export const sign = async (req : Request, res : Response) => {
    try{
    const {name, nickName, password, email} = req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const user = addUser(name,nickName,hashedPassword,email);
    const newUser = new User(user)
    await newUser.save()
    const token = makeUserToken(newUser)


    res.status(200).json({
        message : "the create account succesfully",
        token : token,
        userName : newUser.name
    })
    }
    catch(error : any) {
        if(error.code === 11000) {
            return res.status(409).json({message : "email or password already exists"})
        }
        res.status(400).json({message : `we found error : ${error.message}`})
    }

}

