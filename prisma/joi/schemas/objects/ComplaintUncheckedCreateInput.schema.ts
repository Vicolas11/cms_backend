// @ts-nocheck
import Joi from 'joi';
import { ResponseUncheckedCreateNestedOneWithoutComplaintInputSchemaObject } from './ResponseUncheckedCreateNestedOneWithoutComplaintInput.schema'

export const ComplaintUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  reportedToUserId: Joi.string().required(),
  complainerUserId: Joi.string().required(),
  hasReplied: Joi.boolean(),
  hasOpened: Joi.boolean(),
  createdAt: Joi.date(),
  responseId: Joi.alternatives().try(Joi.string()),
  response: Joi.object().keys(ResponseUncheckedCreateNestedOneWithoutComplaintInputSchemaObject)
}