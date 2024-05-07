// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateNestedManyWithoutUserInput.schema';
import { OTPUncheckedCreateNestedOneWithoutUserInputSchemaObject } from './OTPUncheckedCreateNestedOneWithoutUserInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateNestedManyWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateNestedManyWithoutReportedToInput.schema';
import { ResponseUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './ResponseUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateWithoutAuditTrailInputSchemaObject = {
    id: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  matricNum: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  avatar: Joi.string().required(),
  createdAt: Joi.date(),
  tokens: Joi.object().keys(BlacklistedTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  otp: Joi.object().keys(OTPUncheckedCreateNestedOneWithoutUserInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintUncheckedCreateNestedManyWithoutReportedToInputSchemaObject),
  Response: Joi.object().keys(ResponseUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}