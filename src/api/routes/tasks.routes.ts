import {Router} from 'express'
import { addTask, getTask, deleteTask} from '../../controller/task.controller';

const taskRouter = Router()

taskRouter.post("/",addTask)
taskRouter.get("/",getTask)
taskRouter.delete("/", deleteTask)


export default taskRouter;