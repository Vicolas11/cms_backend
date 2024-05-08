// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutComplaintsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutComplaintsNestedInput.schema';
import { ResponseUpdateOneWithoutComplaintNestedInputSchemaObject } from './ResponseUpdateOneWithoutComplaintNestedInput.schema'

export const ComplaintUpdateWithoutReportedToInputSchemaObject = {
    subject: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  body: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  hasReplied: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  hasOpened: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  responseId: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  complainer: Joi.object().keys(UserUpdateOneRequiredWithoutComplaintsNestedInputSchemaObject),
  response: Joi.object().keys(ResponseUpdateOneWithoutComplaintNestedInputSchemaObject)
}