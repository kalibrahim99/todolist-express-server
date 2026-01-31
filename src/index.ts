import express from 'express'
import taskApp from './api/routes/tasks.routes';
import userRoutes from './api/routes/users.routes';
import cors from "cors"
import swaggerui from "swagger-ui-express"
import swaggerDocument from "./docs/swagger.json"
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize"
import { globalRateLimit } from './config/ratelimit';

const app = express();
app.use(cors({origin : "http://localhost:5173"}))
app.use(express.json())
app.use("/api/tasks",taskApp)
app.use("/api/users",userRoutes)
app.use("/docs",swaggerui.serve,swaggerui.setup(swaggerDocument))
app.use(helmet())
app.use(mongoSanitize())
app.use(globalRateLimit)


export default app