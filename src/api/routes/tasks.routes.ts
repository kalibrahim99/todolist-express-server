import {Router} from 'express'
import { addTask, getTask, deleteTask,updateTask} from '../../controller/task.controller';
import { validateParamsRequest, validateTaskRequest, validateUpdateRequest } from '../../middleware/tasks.middleware';

const taskRouter = Router()

taskRouter.post("/",validateTaskRequest,addTask)
taskRouter.get("/",getTask)
taskRouter.delete("/:name", validateParamsRequest,deleteTask)
taskRouter.put("/tasks_update",validateParamsRequest,validateUpdateRequest,updateTask)


export default taskRouter;