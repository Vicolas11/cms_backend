// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutOtpInputSchemaObject } from './UserCreateWithoutOtpInput.schema';
import { UserUncheckedCreateWithoutOtpInputSchemaObject } from './UserUncheckedCreateWithoutOtpInput.schema';
import { UserCreateOrConnectWithoutOtpInputSchemaObject } from './UserCreateOrConnectWithoutOtpInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutOtpInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutOtpInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutOtpInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutOtpInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}