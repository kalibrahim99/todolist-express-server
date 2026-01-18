import express from 'express'
import taskApp from './api/routes/tasks.routes';

const app = express();

app.use(express.json())
app.use("/api/tasks",taskApp)

app.listen(3000, () => {
    console.log("the server run now")
})