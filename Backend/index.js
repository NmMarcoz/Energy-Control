import express from 'express'
import connectDatabase from './src/database/db.js'
import dotenv from 'dotenv'
import userRoute from './src/routes/user.routes.js'
import authRoute from './src/routes/auth.routes.js'

dotenv.config();

const app = express();
const port = 3000;

connectDatabase()

app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)
app.listen(port, ()=>{console.log(`listening na porta ${port}`)})

