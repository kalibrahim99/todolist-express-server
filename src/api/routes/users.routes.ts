import { Router } from "express";
import { login, sign } from "../../controller/user.controller";
import { validateLoginInput, validateUserInput } from "../../middleware/users.middleware";
import { loginLimiter, registerLimit } from "../../config/ratelimit";


const userRoutes = Router()

userRoutes.post("/login",validateLoginInput,loginLimiter,login)
userRoutes.post("/sign",validateUserInput, registerLimit,sign)
export default userRoutes