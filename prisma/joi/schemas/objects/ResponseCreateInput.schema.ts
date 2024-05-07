// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateNestedOneWithoutResponseInputSchemaObject } from './ComplaintCreateNestedOneWithoutResponseInput.schema';
import { UserCreateNestedOneWithoutResponseInputSchemaObject } from './UserCreateNestedOneWithoutResponseInput.schema'

export const ResponseCreateInputSchemaObject = {
    id: Joi.string(),
  body: Joi.string().required(),
  createdAt: Joi.date(),
  complaint: Joi.object().keys(ComplaintCreateNestedOneWithoutResponseInputSchemaObject),
  User: Joi.object().keys(UserCreateNestedOneWithoutResponseInputSchemaObject)
}