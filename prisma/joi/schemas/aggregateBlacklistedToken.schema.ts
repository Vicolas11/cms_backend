import Joi from 'joi';
import { BlacklistedTokenWhereInputSchemaObject, BlacklistedTokenOrderByWithRelationInputSchemaObject, BlacklistedTokenWhereUniqueInputSchemaObject } from './objects'

export const BlacklistedTokenAggregateSchema = Joi.object().keys({ where: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject), orderBy: Joi.object().keys(BlacklistedTokenOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()