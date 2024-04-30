// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutTokensInputSchemaObject } from './UserUpdateWithoutTokensInput.schema';
import { UserUncheckedUpdateWithoutTokensInputSchemaObject } from './UserUncheckedUpdateWithoutTokensInput.schema';
import { UserCreateWithoutTokensInputSchemaObject } from './UserCreateWithoutTokensInput.schema';
import { UserUncheckedCreateWithoutTokensInputSchemaObject } from './UserUncheckedCreateWithoutTokensInput.schema'

export const UserUpsertWithoutTokensInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutTokensInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutTokensInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTokensInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTokensInputSchemaObject))
}