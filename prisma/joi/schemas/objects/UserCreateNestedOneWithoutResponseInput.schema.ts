// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutResponseInputSchemaObject } from './UserCreateWithoutResponseInput.schema';
import { UserUncheckedCreateWithoutResponseInputSchemaObject } from './UserUncheckedCreateWithoutResponseInput.schema';
import { UserCreateOrConnectWithoutResponseInputSchemaObject } from './UserCreateOrConnectWithoutResponseInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutResponseInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutResponseInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutResponseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutResponseInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}