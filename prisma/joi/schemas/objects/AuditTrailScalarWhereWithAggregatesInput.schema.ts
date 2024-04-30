// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const AuditTrailScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AuditTrailScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#AuditTrailScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#AuditTrailScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#AuditTrailScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#AuditTrailScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  actorId: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  action: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  message: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  status: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  ipAddress: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  userAgent: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  timestramp: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}