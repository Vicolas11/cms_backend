// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputSchemaObject } from './NullableIntFieldUpdateOperationsInput.schema';
import { EnumGenderFieldUpdateOperationsInputSchemaObject } from './EnumGenderFieldUpdateOperationsInput.schema';
import { NullableEnumFacultyFieldUpdateOperationsInputSchemaObject } from './NullableEnumFacultyFieldUpdateOperationsInput.schema';
import { NullableEnumDepartmentFieldUpdateOperationsInputSchemaObject } from './NullableEnumDepartmentFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { AuditTrailUpdateManyWithoutActorNestedInputSchemaObject } from './AuditTrailUpdateManyWithoutActorNestedInput.schema';
import { ComplaintUpdateManyWithoutComplainerNestedInputSchemaObject } from './ComplaintUpdateManyWithoutComplainerNestedInput.schema';
import { ComplaintUpdateManyWithoutReportedToNestedInputSchemaObject } from './ComplaintUpdateManyWithoutReportedToNestedInput.schema'

export const UserUpdateWithoutTokensInputSchemaObject = {
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
  otp: Joi.alternatives().try(Joi.number(),
Joi.object().keys(NullableIntFieldUpdateOperationsInputSchemaObject)),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderFieldUpdateOperationsInputSchemaObject)),
  faculty: Joi.alternatives().try(Joi.object().keys(NullableEnumFacultyFieldUpdateOperationsInputSchemaObject)),
  department: Joi.alternatives().try(Joi.object().keys(NullableEnumDepartmentFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  auditTrail: Joi.object().keys(AuditTrailUpdateManyWithoutActorNestedInputSchemaObject),
  complaints: Joi.object().keys(ComplaintUpdateManyWithoutComplainerNestedInputSchemaObject),
  complaintsTo: Joi.object().keys(ComplaintUpdateManyWithoutReportedToNestedInputSchemaObject)
}