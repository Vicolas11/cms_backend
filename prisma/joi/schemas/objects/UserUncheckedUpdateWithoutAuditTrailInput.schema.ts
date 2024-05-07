// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { EnumGenderFieldUpdateOperationsInputSchemaObject } from './EnumGenderFieldUpdateOperationsInput.schema';
import { NullableEnumFacultyFieldUpdateOperationsInputSchemaObject } from './NullableEnumFacultyFieldUpdateOperationsInput.schema';
import { NullableEnumDepartmentFieldUpdateOperationsInputSchemaObject } from './NullableEnumDepartmentFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BlacklistedTokenUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './BlacklistedTokenUncheckedUpdateManyWithoutUserNestedInput.schema';
import { OTPUncheckedUpdateOneWithoutUserNestedInputSchemaObject } from './OTPUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ComplaintUncheckedUpdateManyWithoutComplainerNestedInputSchemaObject } from './ComplaintUncheckedUpdateManyWithoutComplainerNestedInput.schema';
import { ComplaintUncheckedUpdateManyWithoutReportedToNestedInputSchemaObject } from './ComplaintUncheckedUpdateManyWithoutReportedToNestedInput.schema';
import { ResponseUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './ResponseUncheckedUpdateManyWithoutUserNestedInput.schema'

export const UserUncheckedUpdateWithoutAuditTrailInputSchemaObject = {
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
  tokens: Joi.object().keys(BlacklistedTokenUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  otp: Joi.object().keys(OTPUncheckedUpdateOneWithoutUserNestedInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUncheckedUpdateManyWithoutComplainerNestedInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintUncheckedUpdateManyWithoutReportedToNestedInputSchemaObject),
  Response: Joi.object().keys(ResponseUncheckedUpdateManyWithoutUserNestedInputSchemaObject)
}