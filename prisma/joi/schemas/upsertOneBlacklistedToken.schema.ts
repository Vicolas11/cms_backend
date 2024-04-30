import Joi from 'joi';
import { BlacklistedTokenWhereUniqueInputSchemaObject, BlacklistedTokenCreateInputSchemaObject, BlacklistedTokenUpdateInputSchemaObject } from './objects'

export const BlacklistedTokenUpsertSchema = Joi.object().keys({ where: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject), data: Joi.object().keys(BlacklistedTokenCreateInputSchemaObject), update: Joi.object().keys(BlacklistedTokenUpdateInputSchemaObject)  }).required()