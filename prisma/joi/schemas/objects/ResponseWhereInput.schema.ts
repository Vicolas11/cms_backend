// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { ComplaintRelationFilterSchemaObject } from './ComplaintRelationFilter.schema';
import { ComplaintWhereInputSchemaObject } from './ComplaintWhereInput.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const ResponseWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ResponseWhereInput'),
Joi.array().items(Joi.link('#ResponseWhereInput'))),
  OR: Joi.array().items(Joi.link('#ResponseWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ResponseWhereInput'),
Joi.array().items(Joi.link('#ResponseWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  body: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  complaintId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  complaint: Joi.alternatives().try(Joi.object().keys(ComplaintRelationFilterSchemaObject),
Joi.object().keys(ComplaintWhereInputSchemaObject)),
  User: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}