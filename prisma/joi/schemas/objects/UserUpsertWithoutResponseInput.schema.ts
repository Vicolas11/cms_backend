// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutResponseInputSchemaObject } from './UserUpdateWithoutResponseInput.schema';
import { UserUncheckedUpdateWithoutResponseInputSchemaObject } from './UserUncheckedUpdateWithoutResponseInput.schema';
import { UserCreateWithoutResponseInputSchemaObject } from './UserCreateWithoutResponseInput.schema';
import { UserUncheckedCreateWithoutResponseInputSchemaObject } from './UserUncheckedCreateWithoutResponseInput.schema'

export const UserUpsertWithoutResponseInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutResponseInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutResponseInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutResponseInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutResponseInputSchemaObject))
}