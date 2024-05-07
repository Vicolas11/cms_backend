// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenCreateNestedManyWithoutUserInput.schema';
import { OTPCreateNestedOneWithoutUserInputSchemaObject } from './OTPCreateNestedOneWithoutUserInput.schema';
import { ComplaintCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintCreateNestedManyWithoutReportedToInputSchemaObject } from './ComplaintCreateNestedManyWithoutReportedToInput.schema';
import { ResponseCreateNestedManyWithoutUserInputSchemaObject } from './ResponseCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutAuditTrailInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject),
  otp: Joi.object().keys(OTPCreateNestedOneWithoutUserInputSchemaObject),
  complaints: Joi.object().keys(ComplaintCreateNestedManyWithoutComplainerInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintCreateNestedManyWithoutReportedToInputSchemaObject),
  Response: Joi.object().keys(ResponseCreateNestedManyWithoutUserInputSchemaObject)
}