import express from 'express';
import dotenv from 'dotenv'
import {authenticateJWT} from './middlewares/index.js'
import {calculateRouter} from './routers/index.js'
dotenv.config()


const app=express()
// app.use(authenticateJWT)
app.use(express.json())

app.use("/api/v1", authenticateJWT, calculateRouter)

const PORT=process.env.PORT
app.listen(PORT, ()=>console.log(`Server listening on ${PORT}...`))