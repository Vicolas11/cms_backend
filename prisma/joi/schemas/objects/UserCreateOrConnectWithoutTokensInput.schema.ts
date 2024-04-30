// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTokensInputSchemaObject } from './UserCreateWithoutTokensInput.schema';
import { UserUncheckedCreateWithoutTokensInputSchemaObject } from './UserUncheckedCreateWithoutTokensInput.schema'

export const UserCreateOrConnectWithoutTokensInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTokensInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTokensInputSchemaObject))
}