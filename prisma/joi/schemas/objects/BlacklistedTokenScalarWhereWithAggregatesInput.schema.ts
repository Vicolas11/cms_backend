// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const BlacklistedTokenScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BlacklistedTokenScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#BlacklistedTokenScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#BlacklistedTokenScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#BlacklistedTokenScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#BlacklistedTokenScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  token: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}