import express from 'express'
import taskApp from './api/routes/tasks.routes';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.json())
app.use("/api/tasks",taskApp)

export default app