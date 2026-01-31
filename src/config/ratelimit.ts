import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs : Number(process.env.LOGIN_WINDOWMS),
    max : Number(process.env.LOGIN_RATE_LIMIT),
    message : "you have made many attempts, please wait."
})

export const registerLimit = rateLimit({
    windowMs : 60 * 60 * 1000,
    max : Number(process.env.REGISTER_RATE_LIMIT)
})

export const TaskLimit = rateLimit({
    windowMs : 1 * 60 * 1000,
    max : Number(process.env.TASK_RATE_LIMIT),

})

export const globalRateLimit = rateLimit({
    windowMs : 15 * 60 * 1000,
    max : Number(process.env.GLOBAL_RATE_LIMITE)
})

export const getTaskLimit = rateLimit({
    windowMs : 1 * 60 * 1000,
    max : Number(process.env.GET_TASK_RATE_LIMIT)
})