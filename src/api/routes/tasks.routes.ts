import {Router} from 'express'
import { addTask, getTask, deleteTask,updateTask} from '../../controller/task.controller';
import { validateParamsRequest, validateTaskRequest, validateUpdateRequest } from '../../middleware/tasks.middleware';

const taskRouter = Router()

taskRouter.post("/",validateTaskRequest,addTask)
taskRouter.get("/",getTask)
taskRouter.delete("/:id", validateParamsRequest,deleteTask)
taskRouter.put("/tasks_update",validateUpdateRequest,updateTask)


export default taskRouter;