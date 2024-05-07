import Joi from 'joi';
import { ResponseUpdateManyMutationInputSchemaObject, ResponseWhereInputSchemaObject } from './objects'

export const ResponseUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(ResponseUpdateManyMutationInputSchemaObject), where: Joi.object().keys(ResponseWhereInputSchemaObject)  }).required()