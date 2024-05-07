import Joi from 'joi';
import { ResponseUpdateInputSchemaObject, ResponseWhereUniqueInputSchemaObject } from './objects'

export const ResponseUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(ResponseUpdateInputSchemaObject), where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject)  }).required()