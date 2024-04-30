// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const BlacklistedTokenWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BlacklistedTokenWhereInput'),
Joi.array().items(Joi.link('#BlacklistedTokenWhereInput'))),
  OR: Joi.array().items(Joi.link('#BlacklistedTokenWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#BlacklistedTokenWhereInput'),
Joi.array().items(Joi.link('#BlacklistedTokenWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  token: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}