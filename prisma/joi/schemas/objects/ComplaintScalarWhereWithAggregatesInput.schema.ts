// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema'

export const ComplaintScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ComplaintScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#ComplaintScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#ComplaintScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#ComplaintScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#ComplaintScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  subject: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  body: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  reportedToUserId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  complainerUserId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  hasReplied: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  hasOpened: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  responseId: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string())
}