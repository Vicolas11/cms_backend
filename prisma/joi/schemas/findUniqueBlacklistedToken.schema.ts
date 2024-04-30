import Joi from 'joi';
import { BlacklistedTokenWhereUniqueInputSchemaObject } from './objects'

export const BlacklistedTokenFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject) }).required()