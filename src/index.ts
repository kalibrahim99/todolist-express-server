import express from 'express'
import taskApp from './api/routes/tasks.routes';
import userRoutes from './api/routes/users.routes';
import cors from "cors"

const app = express();
app.use(cors({origin : "http://localhost:5173"}))
app.use(express.json())
app.use("/api/tasks",taskApp)
app.use("/api/users",userRoutes)

export default app