import Joi from 'joi';

export const GenderSchema = Joi.string().valid(...["Male","Female"])