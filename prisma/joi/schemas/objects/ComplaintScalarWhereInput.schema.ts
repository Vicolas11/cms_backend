// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema'

export const ComplaintScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ComplaintScalarWhereInput'),
Joi.array().items(Joi.link('#ComplaintScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#ComplaintScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ComplaintScalarWhereInput'),
Joi.array().items(Joi.link('#ComplaintScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  subject: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  body: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  reportedToUserId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  complainerUserId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  hasReplied: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  hasOpened: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  responseId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string())
}