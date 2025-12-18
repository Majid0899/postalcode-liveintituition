
import express from 'express'
import dotenv from 'dotenv'
import userRouter from './router/userRouter.js'


import { createConnection } from './config/db.js'

dotenv.config()

createConnection()

const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome to our API")
})

app.use("/user",userRouter)



app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${process.env.PORT}`)
})
