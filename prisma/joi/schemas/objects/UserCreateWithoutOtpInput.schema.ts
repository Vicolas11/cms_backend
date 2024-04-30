// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenCreateNestedManyWithoutUserInput.schema';
import { AuditTrailCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailCreateNestedManyWithoutActorInput.schema';
import { ComplaintCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintCreateNestedOneWithoutReportedToInputSchemaObject } from './ComplaintCreateNestedOneWithoutReportedToInput.schema'

export const UserCreateWithoutOtpInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailCreateNestedManyWithoutActorInputSchemaObject),
  complaints: Joi.object().keys(ComplaintCreateNestedManyWithoutComplainerInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintCreateNestedOneWithoutReportedToInputSchemaObject)
}