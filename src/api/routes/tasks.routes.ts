import {Router} from 'express'
import { addTask, getTask, deleteTask} from '../../controller/task.controller';
import { validateTaskdata } from '../../middlewares/tasks.middlewares';
const taskRouter = Router()

taskRouter.post("/",validateTaskdata,addTask)
taskRouter.get("/",getTask)
taskRouter.delete("/", validateTaskdata,deleteTask)


export default taskRouter;