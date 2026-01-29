import { IUser } from "../interfaces"
import { IUserDocument, User } from "../models/user.models"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
export const addUser = (name : string,nickname : string,password : string, email : string) : IUser => {

    const newUser : IUser = {
        name : name,
        nickName : nickname,
        email : email,
        password : password
    }
    return newUser
}

export const checkUser = async (email : string, password : string)  => {
    const user  = await User.findOne({email : email})
    if (!user) throw new Error("INVALID_EMAIL")
    const checkPass =  await bcrypt.compare(password,user.password) 
    if (checkPass === false) throw new Error("INVALID_PASSWORD")
    return {message : "the login is succefully", userInfo : user}
    
}
export const makeUserToken = (user : IUserDocument) : string=> {
    const token = jwt.sign(
        {
            id : user._id,
            role : "user"
        },
        process.env.JWT_SECRET as string,
        {expiresIn : "1h"}
    )
    return token
}