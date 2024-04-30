// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const OTPScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#OTPScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#OTPScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#OTPScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#OTPScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#OTPScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  otp: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  otpExpiration: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}