// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const AuditTrailScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AuditTrailScalarWhereInput'),
Joi.array().items(Joi.link('#AuditTrailScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#AuditTrailScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#AuditTrailScalarWhereInput'),
Joi.array().items(Joi.link('#AuditTrailScalarWhereInput'))),
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
  timestramp: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}