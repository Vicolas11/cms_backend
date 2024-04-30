// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateNestedManyWithoutUserInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutReportedToInput.schema'

export const UserUncheckedCreateWithoutAuditTrailInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  otp: Joi.alternatives().try(Joi.number()),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject),
  complaintsTo: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutReportedToInputSchemaObject)
}