import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db"
import app from "."



const startServer = async () => {
    try{
     await connectDB()
     
     const port = process.env.PORT || 3000
     app.listen(port, () => {
             console.log("the server run now in port " + port)
         })
     
     
     }
    catch (error) {
         console.error("error" + error)
         process.exit(1)
     }
}
startServer()