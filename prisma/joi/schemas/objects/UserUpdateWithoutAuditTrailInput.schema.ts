// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { EnumGenderFieldUpdateOperationsInputSchemaObject } from './EnumGenderFieldUpdateOperationsInput.schema';
import { NullableEnumFacultyFieldUpdateOperationsInputSchemaObject } from './NullableEnumFacultyFieldUpdateOperationsInput.schema';
import { NullableEnumDepartmentFieldUpdateOperationsInputSchemaObject } from './NullableEnumDepartmentFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BlacklistedTokenUpdateManyWithoutUserNestedInputSchemaObject } from './BlacklistedTokenUpdateManyWithoutUserNestedInput.schema';
import { OTPUpdateOneWithoutUserNestedInputSchemaObject } from './OTPUpdateOneWithoutUserNestedInput.schema';
import { ComplaintUpdateManyWithoutComplainerNestedInputSchemaObject } from './ComplaintUpdateManyWithoutComplainerNestedInput.schema';
import { ComplaintUpdateOneWithoutReportedToNestedInputSchemaObject } from './ComplaintUpdateOneWithoutReportedToNestedInput.schema'

export const UserUpdateWithoutAuditTrailInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFieldUpdateOperationsInputSchemaObject)),
  name: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  email: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  matricNum: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  password: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  avatar: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderFieldUpdateOperationsInputSchemaObject)),
  faculty: Joi.alternatives().try(Joi.object().keys(NullableEnumFacultyFieldUpdateOperationsInputSchemaObject)),
  department: Joi.alternatives().try(Joi.object().keys(NullableEnumDepartmentFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  tokens: Joi.object().keys(BlacklistedTokenUpdateManyWithoutUserNestedInputSchemaObject),
  otp: Joi.object().keys(OTPUpdateOneWithoutUserNestedInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUpdateManyWithoutComplainerNestedInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintUpdateOneWithoutReportedToNestedInputSchemaObject)
}