
import {ITask} from '../interfaces'
import Task, { TaskDocument } from '../models/task.model';

export const processTaskRequest = (name : string) : ITask=> {
    const result : ITask = {
        taskName : name,
        date : new Date()
    }
    return result;
}

export const processDeleterequest = async (name : string) : Promise<string> => {
    const deleteTask = await Task.deleteOne({taskName : name});
    if (!deleteTask) throw new Error("the task delete not completed")
    return "delete task complete"
}

export const updateTaskProcess = async (name : string, newName : string)  => {

   const taskInfo : TaskDocument | null = await Task.findOneAndUpdate(
    {taskName : name},
    {taskName: newName},
    {new : true}

);
    if (!taskInfo)  throw new Error("we didnt fount task by name " + name)
    return taskInfo

}