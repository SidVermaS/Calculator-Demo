import Joi from 'joi'

const checkNumber=(value)=>!isNaN(value)

export const CalculateValidator= Joi.object().keys({
    num1: Joi.string().required().custom(checkNumber),
    num2: Joi.string().required().custom(checkNumber)
  });