import Joi from 'joi';
import { ComplaintCreateInputSchemaObject } from './objects'

export const ComplaintCreateSchema = Joi.object().keys({ data: Joi.object().keys(ComplaintCreateInputSchemaObject)  }).required()