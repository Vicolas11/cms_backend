// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutComplaintsToInputSchemaObject } from './UserUpdateWithoutComplaintsToInput.schema';
import { UserUncheckedUpdateWithoutComplaintsToInputSchemaObject } from './UserUncheckedUpdateWithoutComplaintsToInput.schema';
import { UserCreateWithoutComplaintsToInputSchemaObject } from './UserCreateWithoutComplaintsToInput.schema';
import { UserUncheckedCreateWithoutComplaintsToInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsToInput.schema'

export const UserUpsertWithoutComplaintsToInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutComplaintsToInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutComplaintsToInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsToInputSchemaObject))
}