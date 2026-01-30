import { Request, Response } from "express";
import { authRequest } from "../interfaces";
import { processTaskRequest ,processDeleterequest,updateTaskProcess} from "../services/task.services";
import Task from "../models/task.model";




export const addTask = async (req : authRequest, res : Response) => {
    
    const {name} = req.body
    const id = req.user?.id
    try {
    if(!id) return res.status(403).json({message : "User not authenticated"})
    const resultOfProcessTask = processTaskRequest(name, id)
    const newTask  = new Task(resultOfProcessTask);
    await newTask.save()
    res.status(201).json(newTask)


    } catch(error : any){
      if (error.name === "ValidationError"){
        return res.status(400).json({ message :  error.message})
      } else if(error.name === "CastError"){
        return res.status(400).json({message : error.message})
      } else if(error.code === 11000){
        return res.status(400).json({message : "this data already exists"})
      }
      return res.status(404).json({message : error.message})
    }
    
    
}

export const getTask = async (req : authRequest,res : Response) => {
  if(!req.user) return res.status(403).json({message: "user not authenticated"}) 
  const tasksDB =  await Task.find(req.user.id)
  res.status(200).json(tasksDB)
}


export const deleteTask = async (req : Request,res : Response) => {
    const id = req.params.id
    try {
     const tasksprocessResult = await processDeleterequest(id);
       return res.status(200).json(tasksprocessResult)

    } catch (error : any) {
      if (error.message === "MongoServerSelectionError") {
        return res.status(500).json({message : "we have a problem in connected with server"})
      }
      return  res.status(404).json({message :  error.message})
    }
    
}
export const updateTask = async (req : Request,res : Response) => {
  const id = req.params.id
  const { newName} = req.body;
  try{
    const taskUpdate = await updateTaskProcess(id, newName)

    return res.status(200).json(taskUpdate)
  }
  catch (error : any){
    
      if (error.name === "ValidationError"){
        return res.status(400).json({ message :  error.message})
      } else if(error.name === "CastError"){
        return res.status(400).json({message : error.message})
      } else if(error.code === 11000){
        return res.status(400).json({message : "this data already exists"})
      }
    
    return res.status(400).json("unknow error" + error)
  }
  
}