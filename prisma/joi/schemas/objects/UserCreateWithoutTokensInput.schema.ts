// @ts-nocheck
import Joi from 'joi';
import { AuditTrailCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailCreateNestedManyWithoutActorInput.schema';
import { ComplaintCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintCreateNestedManyWithoutReportedToInputSchemaObject } from './ComplaintCreateNestedManyWithoutReportedToInput.schema'

export const UserCreateWithoutTokensInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  otp: Joi.alternatives().try(Joi.number()),
  createdAt: Joi.date(),
  auditTrail: Joi.object().keys(AuditTrailCreateNestedManyWithoutActorInputSchemaObject),
  complaints: Joi.object().keys(ComplaintCreateNestedManyWithoutComplainerInputSchemaObject),
  complaintsTo: Joi.object().keys(ComplaintCreateNestedManyWithoutReportedToInputSchemaObject)
}