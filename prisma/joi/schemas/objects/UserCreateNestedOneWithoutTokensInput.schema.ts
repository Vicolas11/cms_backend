// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutTokensInputSchemaObject } from './UserCreateWithoutTokensInput.schema';
import { UserUncheckedCreateWithoutTokensInputSchemaObject } from './UserUncheckedCreateWithoutTokensInput.schema';
import { UserCreateOrConnectWithoutTokensInputSchemaObject } from './UserCreateOrConnectWithoutTokensInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutTokensInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTokensInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTokensInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutTokensInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}