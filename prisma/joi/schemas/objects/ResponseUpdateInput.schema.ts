// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { ComplaintUpdateOneRequiredWithoutResponseNestedInputSchemaObject } from './ComplaintUpdateOneRequiredWithoutResponseNestedInput.schema';
import { UserUpdateOneWithoutResponseNestedInputSchemaObject } from './UserUpdateOneWithoutResponseNestedInput.schema'

export const ResponseUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  body: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  complaint: Joi.object().keys(ComplaintUpdateOneRequiredWithoutResponseNestedInputSchemaObject),
  User: Joi.object().keys(UserUpdateOneWithoutResponseNestedInputSchemaObject)
}