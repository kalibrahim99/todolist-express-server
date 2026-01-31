import {Router} from 'express'
import { addTask, getTask, deleteTask,updateTask} from '../../controller/task.controller';
import { validateParamsRequest, validateTaskRequest, validateUpdateRequest } from '../../middleware/tasks.middleware';
import { authUser } from '../../middleware/auth.middleware';
import { getTaskLimit, TaskLimit } from '../../config/ratelimit';

const taskRouter = Router()

taskRouter.post("/",authUser,validateTaskRequest,TaskLimit,addTask)
taskRouter.get("/",authUser,getTaskLimit,getTask)
taskRouter.delete("/:id", authUser,validateParamsRequest,TaskLimit,deleteTask)
taskRouter.put("/:id",authUser,validateParamsRequest,validateUpdateRequest,TaskLimit,updateTask)


export default taskRouter;