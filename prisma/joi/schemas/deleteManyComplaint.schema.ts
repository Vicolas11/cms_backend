import Joi from 'joi';
import { ComplaintWhereInputSchemaObject } from './objects'

export const ComplaintDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereInputSchemaObject)  }).required()