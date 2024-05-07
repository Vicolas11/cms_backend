// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutReportedToInputSchemaObject } from './UserCreateNestedOneWithoutReportedToInput.schema';
import { UserCreateNestedOneWithoutComplaintsInputSchemaObject } from './UserCreateNestedOneWithoutComplaintsInput.schema';
import { ResponseCreateNestedOneWithoutComplaintInputSchemaObject } from './ResponseCreateNestedOneWithoutComplaintInput.schema'

export const ComplaintCreateInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  hasReplied: Joi.boolean(),
  hasOpened: Joi.boolean(),
  createdAt: Joi.date(),
  responseId: Joi.alternatives().try(Joi.string()),
  reportedTo: Joi.object().keys(UserCreateNestedOneWithoutReportedToInputSchemaObject),
  complainer: Joi.object().keys(UserCreateNestedOneWithoutComplaintsInputSchemaObject),
  response: Joi.object().keys(ResponseCreateNestedOneWithoutComplaintInputSchemaObject)
}