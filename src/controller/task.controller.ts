import { Request, Response } from "express";
import { processTaskRequest ,processDeleterequest,updateTaskProcess} from "../services/task.services";
import Task from "../models/task.model";




export const addTask = async (req : Request, res : Response) => {
    const {name} = req.body
    const resultOfProcessTask = processTaskRequest(name)
    const newTask  = new Task(resultOfProcessTask);
    await newTask.save()
    
    
    res.status(201).json(newTask)
}

export const getTask = async (req : Request,res : Response) => {
  const tasksDB =  await Task.find()
  res.status(200).json(tasksDB)
}


export const deleteTask = async (req : Request,res : Response) => {
    const name = req.params.name
    try {
     const tasksprocessResult = await processDeleterequest(name);
       return res.status(200).json(tasksprocessResult)

    } catch (error) {
      return  res.status(404).json("error :" + error)
    }
    
}
export const updateTask = async (req : Request,res : Response) => {
  const name = req.params.name
  const { newName} = req.body;
  try{
    const taskUpdate = await updateTaskProcess(name, newName)

    return res.status(200).json(taskUpdate)
  }
  catch (error : any){
    
      if (error.name === "ValidationError"){
        return res.status(400).json("error : " + error.message)
      } else if(error.name === "CastError"){
        return res.status(400).json("error : " + error.message)
      } else if(error.code === 11000){
        return res.status(400).json("error : " + error.message)
      }
    
    return res.status(400).json("unknow error" + error)
  }
  
}