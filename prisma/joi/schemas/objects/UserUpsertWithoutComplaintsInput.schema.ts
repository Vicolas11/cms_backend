// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutComplaintsInputSchemaObject } from './UserUpdateWithoutComplaintsInput.schema';
import { UserUncheckedUpdateWithoutComplaintsInputSchemaObject } from './UserUncheckedUpdateWithoutComplaintsInput.schema';
import { UserCreateWithoutComplaintsInputSchemaObject } from './UserCreateWithoutComplaintsInput.schema';
import { UserUncheckedCreateWithoutComplaintsInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsInput.schema'

export const UserUpsertWithoutComplaintsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutComplaintsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutComplaintsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsInputSchemaObject))
}