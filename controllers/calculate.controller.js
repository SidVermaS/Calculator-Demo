import express from 'express'
import {CalculateValidator} from '../validators/index.js'

export const calculateAdd=(req, res,)=>{
    const validationResult=CalculateValidator.validate(req.query)
    if(validationResult.error){
        return res.status(422).json({ message: validationResult.error.message })
    }
    let {num1, num2}=req.query
    num1=Number(num1)
    num2=Number(num2)
    return res.status(200).json({ result: num1 + num2 })
}