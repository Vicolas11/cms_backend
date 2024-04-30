import Joi from 'joi';
import { BlacklistedTokenWhereInputSchemaObject, BlacklistedTokenOrderByWithAggregationInputSchemaObject, BlacklistedTokenScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { BlacklistedTokenScalarFieldEnumSchema } from './enums'

export const BlacklistedTokenGroupBySchema = Joi.object().keys({ where: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject), orderBy: Joi.object().keys(BlacklistedTokenOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(BlacklistedTokenScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(BlacklistedTokenScalarFieldEnumSchema).required()  }).required()