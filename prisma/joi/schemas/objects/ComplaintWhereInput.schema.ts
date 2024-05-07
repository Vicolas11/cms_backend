// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';
import { ResponseRelationFilterSchemaObject } from './ResponseRelationFilter.schema';
import { ResponseWhereInputSchemaObject } from './ResponseWhereInput.schema'

export const ComplaintWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ComplaintWhereInput'),
Joi.array().items(Joi.link('#ComplaintWhereInput'))),
  OR: Joi.array().items(Joi.link('#ComplaintWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ComplaintWhereInput'),
Joi.array().items(Joi.link('#ComplaintWhereInput'))),
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
Joi.string()),
  reportedTo: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  complainer: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  response: Joi.alternatives().try(Joi.object().keys(ResponseRelationFilterSchemaObject),
Joi.object().keys(ResponseWhereInputSchemaObject))
}