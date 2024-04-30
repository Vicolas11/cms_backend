import Joi from 'joi';
import { BlacklistedTokenCreateInputSchemaObject } from './objects'

export const BlacklistedTokenCreateSchema = Joi.object().keys({ data: Joi.object().keys(BlacklistedTokenCreateInputSchemaObject)  }).required()