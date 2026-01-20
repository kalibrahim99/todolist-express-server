import { Request, Response } from "express";
import { processTaskRequest ,processDeleterequest} from "../services/task.services";
import Task from "../interfaces";

let tasks : Task[] = []


export const addTask = (req : Request, res : Response) => {
    const {name, id} = req.body

    const newTask : Task = processTaskRequest(name,id);
    tasks.push(newTask)
    res.status(201).json(tasks)
}

export const getTask = (req : Request,res : Response) => {
    res.status(200).json(tasks)
}

export const deleteTask = (req : Request,res : Response) => {
    const {id} = req.body
    let result = processDeleterequest(tasks,id);
    if(typeof result !== "object") return res.status(404).json(result)
    res.status(204).json(result)
}