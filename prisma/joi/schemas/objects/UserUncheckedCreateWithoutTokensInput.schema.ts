// @ts-nocheck
import Joi from 'joi';
import { AuditTrailUncheckedCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailUncheckedCreateNestedManyWithoutActorInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutReportedToInput.schema'

export const UserUncheckedCreateWithoutTokensInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  otp: Joi.alternatives().try(Joi.number()),
  createdAt: Joi.date(),
  auditTrail: Joi.object().keys(AuditTrailUncheckedCreateNestedManyWithoutActorInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject),
  complaintsTo: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutReportedToInputSchemaObject)
}