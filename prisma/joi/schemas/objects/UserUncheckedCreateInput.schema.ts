// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateNestedManyWithoutUserInput.schema';
import { AuditTrailUncheckedCreateNestedManyWithoutActorInputSchemaObject } from './AuditTrailUncheckedCreateNestedManyWithoutActorInput.schema';
import { OTPUncheckedCreateNestedOneWithoutUserInputSchemaObject } from './OTPUncheckedCreateNestedOneWithoutUserInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateNestedOneWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateNestedOneWithoutReportedToInput.schema'

export const UserUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailUncheckedCreateNestedManyWithoutActorInputSchemaObject),
  otp: Joi.object().keys(OTPUncheckedCreateNestedOneWithoutUserInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintUncheckedCreateNestedOneWithoutReportedToInputSchemaObject)
}