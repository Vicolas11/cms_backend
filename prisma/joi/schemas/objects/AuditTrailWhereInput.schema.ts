// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const AuditTrailWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AuditTrailWhereInput'),
Joi.array().items(Joi.link('#AuditTrailWhereInput'))),
  OR: Joi.array().items(Joi.link('#AuditTrailWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#AuditTrailWhereInput'),
Joi.array().items(Joi.link('#AuditTrailWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  actorId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  action: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  message: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  status: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  ipAddress: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userAgent: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  timestramp: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  actor: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}