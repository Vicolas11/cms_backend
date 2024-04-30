// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutComplaintsInputSchemaObject } from './UserCreateNestedOneWithoutComplaintsInput.schema'

export const ComplaintCreateWithoutReportedToInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  complain: Joi.string().required(),
  hasReplied: Joi.boolean(),
  createdAt: Joi.date(),
  complainer: Joi.object().keys(UserCreateNestedOneWithoutComplaintsInputSchemaObject)
}