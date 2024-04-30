// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const BlacklistedTokenScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BlacklistedTokenScalarWhereInput'),
Joi.array().items(Joi.link('#BlacklistedTokenScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#BlacklistedTokenScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#BlacklistedTokenScalarWhereInput'),
Joi.array().items(Joi.link('#BlacklistedTokenScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  token: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}