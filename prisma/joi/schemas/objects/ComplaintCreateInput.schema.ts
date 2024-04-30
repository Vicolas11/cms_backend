// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutComplaintsToInputSchemaObject } from './UserCreateNestedOneWithoutComplaintsToInput.schema';
import { UserCreateNestedOneWithoutComplaintsInputSchemaObject } from './UserCreateNestedOneWithoutComplaintsInput.schema'

export const ComplaintCreateInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  complain: Joi.string().required(),
  hasReplied: Joi.boolean(),
  createdAt: Joi.date(),
  reportedTo: Joi.object().keys(UserCreateNestedOneWithoutComplaintsToInputSchemaObject),
  complainer: Joi.object().keys(UserCreateNestedOneWithoutComplaintsInputSchemaObject)
}