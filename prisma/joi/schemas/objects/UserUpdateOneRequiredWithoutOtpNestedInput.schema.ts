// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutOtpInputSchemaObject } from './UserCreateWithoutOtpInput.schema';
import { UserUncheckedCreateWithoutOtpInputSchemaObject } from './UserUncheckedCreateWithoutOtpInput.schema';
import { UserCreateOrConnectWithoutOtpInputSchemaObject } from './UserCreateOrConnectWithoutOtpInput.schema';
import { UserUpsertWithoutOtpInputSchemaObject } from './UserUpsertWithoutOtpInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOtpInputSchemaObject } from './UserUpdateWithoutOtpInput.schema';
import { UserUncheckedUpdateWithoutOtpInputSchemaObject } from './UserUncheckedUpdateWithoutOtpInput.schema'

export const UserUpdateOneRequiredWithoutOtpNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutOtpInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutOtpInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutOtpInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutOtpInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutOtpInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutOtpInputSchemaObject))
}