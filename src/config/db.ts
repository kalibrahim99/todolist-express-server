import mongoose from "mongoose";
const connectDB = async () : Promise<void> => {

    try{
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) throw new Error("URL_NOTDEFIND"); 

        await mongoose.connect(dbUrl)
    } catch (error ) {

        if (error instanceof Error){
            if(error.message === "URL_NOTDEFIND")
             console.error("url get error :" + error)
            else console.error("we have error in db" + error)
        }
        else console.error("unknow DB error")
        process.exit(1)
    }
}

export default connectDB