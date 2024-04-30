import Joi from 'joi';
import { BlacklistedTokenWhereInputSchemaObject, BlacklistedTokenOrderByWithRelationInputSchemaObject, BlacklistedTokenWhereUniqueInputSchemaObject } from './objects';
import { BlacklistedTokenScalarFieldEnumSchema } from './enums'

export const BlacklistedTokenFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject), orderBy: Joi.object().keys(BlacklistedTokenOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(BlacklistedTokenScalarFieldEnumSchema) }).required()