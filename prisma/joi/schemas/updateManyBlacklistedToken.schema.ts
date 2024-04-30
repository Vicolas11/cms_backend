import Joi from 'joi';
import { BlacklistedTokenUpdateManyMutationInputSchemaObject, BlacklistedTokenWhereInputSchemaObject } from './objects'

export const BlacklistedTokenUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(BlacklistedTokenUpdateManyMutationInputSchemaObject), where: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject)  }).required()