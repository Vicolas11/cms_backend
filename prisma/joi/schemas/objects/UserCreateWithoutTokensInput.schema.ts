// @ts-nocheck
import Joi from 'joi';
import { AuditTrailCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailCreateNestedManyWithoutActorInput.schema';
import { OTPCreateNestedOneWithoutUserInputSchemaObject } from './OTPCreateNestedOneWithoutUserInput.schema';
import { ComplaintCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintCreateNestedOneWithoutReportedToInputSchemaObject } from './ComplaintCreateNestedOneWithoutReportedToInput.schema'

export const UserCreateWithoutTokensInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  createdAt: Joi.date(),
  auditTrail: Joi.object().keys(AuditTrailCreateNestedManyWithoutActorInputSchemaObject),
  otp: Joi.object().keys(OTPCreateNestedOneWithoutUserInputSchemaObject),
  complaints: Joi.object().keys(ComplaintCreateNestedManyWithoutComplainerInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintCreateNestedOneWithoutReportedToInputSchemaObject)
}