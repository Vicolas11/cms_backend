// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenCreateNestedManyWithoutUserInput.schema';
import { AuditTrailCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailCreateNestedManyWithoutActorInput.schema';
import { OTPCreateNestedOneWithoutUserInputSchemaObject } from './OTPCreateNestedOneWithoutUserInput.schema';
import { ComplaintCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintCreateNestedManyWithoutComplainerInput.schema';
import { ResponseCreateNestedManyWithoutUserInputSchemaObject } from './ResponseCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutReportedToInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailCreateNestedManyWithoutActorInputSchemaObject),
  otp: Joi.object().keys(OTPCreateNestedOneWithoutUserInputSchemaObject),
  complaints: Joi.object().keys(ComplaintCreateNestedManyWithoutComplainerInputSchemaObject),
  Response: Joi.object().keys(ResponseCreateNestedManyWithoutUserInputSchemaObject)
}