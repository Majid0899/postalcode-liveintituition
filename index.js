
import express from 'express'
import dotenv from 'dotenv'



import { createConnection } from './config/db.js'

dotenv.config()

createConnection()

const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome to our API")
})



app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${process.env.PORT}`)
})
