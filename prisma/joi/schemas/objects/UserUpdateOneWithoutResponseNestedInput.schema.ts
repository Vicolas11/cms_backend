// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutResponseInputSchemaObject } from './UserCreateWithoutResponseInput.schema';
import { UserUncheckedCreateWithoutResponseInputSchemaObject } from './UserUncheckedCreateWithoutResponseInput.schema';
import { UserCreateOrConnectWithoutResponseInputSchemaObject } from './UserCreateOrConnectWithoutResponseInput.schema';
import { UserUpsertWithoutResponseInputSchemaObject } from './UserUpsertWithoutResponseInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutResponseInputSchemaObject } from './UserUpdateWithoutResponseInput.schema';
import { UserUncheckedUpdateWithoutResponseInputSchemaObject } from './UserUncheckedUpdateWithoutResponseInput.schema'

export const UserUpdateOneWithoutResponseNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutResponseInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutResponseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutResponseInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutResponseInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutResponseInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutResponseInputSchemaObject))
}