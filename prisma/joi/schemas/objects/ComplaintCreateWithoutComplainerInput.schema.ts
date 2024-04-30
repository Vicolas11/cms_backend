// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutReportedToInputSchemaObject } from './UserCreateNestedOneWithoutReportedToInput.schema'

export const ComplaintCreateWithoutComplainerInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  complain: Joi.string().required(),
  hasReplied: Joi.boolean(),
  createdAt: Joi.date(),
  reportedTo: Joi.object().keys(UserCreateNestedOneWithoutReportedToInputSchemaObject)
}