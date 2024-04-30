// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const OTPWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#OTPWhereInput'),
Joi.array().items(Joi.link('#OTPWhereInput'))),
  OR: Joi.array().items(Joi.link('#OTPWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#OTPWhereInput'),
Joi.array().items(Joi.link('#OTPWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  otp: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  otpExpiration: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}