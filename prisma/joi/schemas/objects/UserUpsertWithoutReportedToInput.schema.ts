// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutReportedToInputSchemaObject } from './UserUpdateWithoutReportedToInput.schema';
import { UserUncheckedUpdateWithoutReportedToInputSchemaObject } from './UserUncheckedUpdateWithoutReportedToInput.schema';
import { UserCreateWithoutReportedToInputSchemaObject } from './UserCreateWithoutReportedToInput.schema';
import { UserUncheckedCreateWithoutReportedToInputSchemaObject } from './UserUncheckedCreateWithoutReportedToInput.schema'

export const UserUpsertWithoutReportedToInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutReportedToInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutReportedToInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutReportedToInputSchemaObject))
}