// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutResponseInputSchemaObject } from './UserCreateNestedOneWithoutResponseInput.schema'

export const ResponseCreateWithoutComplaintInputSchemaObject = {
    id: Joi.string(),
  body: Joi.string().required(),
  createdAt: Joi.date(),
  User: Joi.object().keys(UserCreateNestedOneWithoutResponseInputSchemaObject)
}