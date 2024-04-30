import Joi from 'joi';
import { OTPCreateInputSchemaObject } from './objects'

export const OTPCreateSchema = Joi.object().keys({ data: Joi.object().keys(OTPCreateInputSchemaObject)  }).required()