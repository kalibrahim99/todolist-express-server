import { Request, Response } from "express";
import { processTaskRequest ,processDeleterequest} from "../services/task.services";
import Task from "../interfaces";

let tasks : Task[] = []


export const addTask = (req : Request, res : Response) => {
    const {name, id} = req.body

    const newTask : Task | string = processTaskRequest(name,id);
    if(typeof newTask === "object") tasks.push(newTask)
    else return res.status(400).json(newTask)
    
    res.status(201).json(tasks)
}

export const getTask = (req : Request,res : Response) => {
    res.status(200).json(tasks)
}

export const deleteTask = (req : Request,res : Response) => {
    const {id} = req.body

    if(Number.isNaN(Number(id)) === true || Number(id) === 0) return res.status(400).json("try a true value")
    const tasksprocessResult : string = processDeleterequest(tasks,id);

    res.status(200).json(tasksprocessResult)
}