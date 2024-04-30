import Joi from 'joi';
import { BlacklistedTokenUpdateInputSchemaObject, BlacklistedTokenWhereUniqueInputSchemaObject } from './objects'

export const BlacklistedTokenUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(BlacklistedTokenUpdateInputSchemaObject), where: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject)  }).required()