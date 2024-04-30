// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutTokensInputSchemaObject } from './UserCreateWithoutTokensInput.schema';
import { UserUncheckedCreateWithoutTokensInputSchemaObject } from './UserUncheckedCreateWithoutTokensInput.schema';
import { UserCreateOrConnectWithoutTokensInputSchemaObject } from './UserCreateOrConnectWithoutTokensInput.schema';
import { UserUpsertWithoutTokensInputSchemaObject } from './UserUpsertWithoutTokensInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTokensInputSchemaObject } from './UserUpdateWithoutTokensInput.schema';
import { UserUncheckedUpdateWithoutTokensInputSchemaObject } from './UserUncheckedUpdateWithoutTokensInput.schema'

export const UserUpdateOneRequiredWithoutTokensNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutTokensInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutTokensInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutTokensInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutTokensInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutTokensInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutTokensInputSchemaObject))
}