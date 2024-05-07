import Joi from 'joi';
import { ResponseCreateInputSchemaObject } from './objects'

export const ResponseCreateSchema = Joi.object().keys({ data: Joi.object().keys(ResponseCreateInputSchemaObject)  }).required()