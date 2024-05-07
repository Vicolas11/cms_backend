import Joi from 'joi';
import { ResponseWhereUniqueInputSchemaObject, ResponseCreateInputSchemaObject, ResponseUpdateInputSchemaObject } from './objects'

export const ResponseUpsertSchema = Joi.object().keys({ where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject), data: Joi.object().keys(ResponseCreateInputSchemaObject), update: Joi.object().keys(ResponseUpdateInputSchemaObject)  }).required()