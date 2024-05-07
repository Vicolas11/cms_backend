// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutResponseInputSchemaObject } from './UserCreateWithoutResponseInput.schema';
import { UserUncheckedCreateWithoutResponseInputSchemaObject } from './UserUncheckedCreateWithoutResponseInput.schema'

export const UserCreateOrConnectWithoutResponseInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutResponseInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutResponseInputSchemaObject))
}