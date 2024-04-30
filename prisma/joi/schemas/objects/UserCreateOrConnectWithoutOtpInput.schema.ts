// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOtpInputSchemaObject } from './UserCreateWithoutOtpInput.schema';
import { UserUncheckedCreateWithoutOtpInputSchemaObject } from './UserUncheckedCreateWithoutOtpInput.schema'

export const UserCreateOrConnectWithoutOtpInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutOtpInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutOtpInputSchemaObject))
}