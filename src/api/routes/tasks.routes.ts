import {Router} from 'express'
import { addTask, getTask, deleteTask,updateTask} from '../../controller/task.controller';
import { validateParamsRequest, validateTaskRequest, validateUpdateRequest } from '../../middleware/tasks.middleware';
import { authUser } from '../../middleware/auth.middleware';

const taskRouter = Router()

taskRouter.post("/",authUser,validateTaskRequest,addTask)
taskRouter.get("/",authUser,getTask)
taskRouter.delete("/:id", authUser,validateParamsRequest,deleteTask)
taskRouter.put("/id",authUser,validateParamsRequest,validateUpdateRequest,updateTask)


export default taskRouter;