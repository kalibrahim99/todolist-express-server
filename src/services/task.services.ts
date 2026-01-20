import Task from '../interfaces'

export const processTaskRequest = (name : string, id : number) : Task => {
    const result : Task = {
        taskName : name,
        ID : id,
        date : new Date()
    }
    return result;
}

export const processDeleterequest = (tasks : Task[], id : number) : string => {
   
    const taskIndex = tasks.findIndex(task => task.ID === id)

    if (taskIndex === -1) return "we didnt found this task"
    tasks.splice(taskIndex,1)
    return "delete task complete"
}