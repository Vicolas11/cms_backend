// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutTokensInputSchemaObject } from './UserCreateNestedOneWithoutTokensInput.schema'

export const BlacklistedTokenCreateInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required(),
  createdAt: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutTokensInputSchemaObject)
}