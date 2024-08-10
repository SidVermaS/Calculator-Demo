import { Router } from 'express'
import  calculateRouter from './calculate.route.js'

const router = Router()
calculateRouter.use(calculateRouter)

export {calculateRouter}
export default router