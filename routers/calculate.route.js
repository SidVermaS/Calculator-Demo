import { Router } from "express";
import {calculateAdd} from '../controllers/calculate.controller.js'
 
const calculateRouter = Router()
calculateRouter.get("/calculate/add",  calculateAdd)

export default calculateRouter