// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateNestedOneWithoutResponseInputSchemaObject } from './ComplaintCreateNestedOneWithoutResponseInput.schema'

export const ResponseCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  body: Joi.string().required(),
  createdAt: Joi.date(),
  complaint: Joi.object().keys(ComplaintCreateNestedOneWithoutResponseInputSchemaObject)
}