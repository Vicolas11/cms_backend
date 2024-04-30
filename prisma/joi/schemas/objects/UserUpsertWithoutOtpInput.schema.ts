// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutOtpInputSchemaObject } from './UserUpdateWithoutOtpInput.schema';
import { UserUncheckedUpdateWithoutOtpInputSchemaObject } from './UserUncheckedUpdateWithoutOtpInput.schema';
import { UserCreateWithoutOtpInputSchemaObject } from './UserCreateWithoutOtpInput.schema';
import { UserUncheckedCreateWithoutOtpInputSchemaObject } from './UserUncheckedCreateWithoutOtpInput.schema'

export const UserUpsertWithoutOtpInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutOtpInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutOtpInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutOtpInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutOtpInputSchemaObject))
}