import Joi from 'joi';
import { BlacklistedTokenWhereInputSchemaObject } from './objects'

export const BlacklistedTokenDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject)  }).required()