import mongoose, {Document, Schema} from "mongoose";
import {ITask} from "../interfaces";

export interface TaskDocument extends ITask, Document{}

const shema = new Schema<ITask>({
    taskName : {
        type : String,
        required : true,
        unique : true
    },

    date : {
        type : Date,
        required : false
    }
})

 const Task = mongoose.model("task",shema)
 export default Task
