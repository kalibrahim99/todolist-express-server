import mongoose, {Document, Schema} from "mongoose";
import Task from "../interfaces";
export interface TaskDocument extends Task, Document{}
const shema = new Schema<Task>({
    taskName : {
        type : String,
        required : true
    },
    ID : {
        type : Number,
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
