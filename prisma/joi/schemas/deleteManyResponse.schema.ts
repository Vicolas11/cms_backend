import Joi from 'joi';
import { ResponseWhereInputSchemaObject } from './objects'

export const ResponseDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(ResponseWhereInputSchemaObject)  }).required()