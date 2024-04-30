// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutReportedToNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutReportedToNestedInput.schema';
import { UserUpdateOneRequiredWithoutComplaintsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutComplaintsNestedInput.schema'

export const ComplaintUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  subject: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  complain: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  hasReplied: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  reportedTo: Joi.object().keys(UserUpdateOneRequiredWithoutReportedToNestedInputSchemaObject),
  complainer: Joi.object().keys(UserUpdateOneRequiredWithoutComplaintsNestedInputSchemaObject)
}