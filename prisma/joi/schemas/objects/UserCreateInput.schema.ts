// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenCreateNestedManyWithoutUserInput.schema';
import { AuditTrailCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailCreateNestedManyWithoutActorInput.schema';
import { ComplaintCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintCreateNestedManyWithoutReportedToInputSchemaObject } from './ComplaintCreateNestedManyWithoutReportedToInput.schema'

export const UserCreateInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  otp: Joi.alternatives().try(Joi.number()),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailCreateNestedManyWithoutActorInputSchemaObject),
  complaints: Joi.object().keys(ComplaintCreateNestedManyWithoutComplainerInputSchemaObject),
  complaintsTo: Joi.object().keys(ComplaintCreateNestedManyWithoutReportedToInputSchemaObject)
}