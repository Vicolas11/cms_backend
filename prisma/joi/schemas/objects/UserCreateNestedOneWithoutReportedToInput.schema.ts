// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutReportedToInputSchemaObject } from './UserCreateWithoutReportedToInput.schema';
import { UserUncheckedCreateWithoutReportedToInputSchemaObject } from './UserUncheckedCreateWithoutReportedToInput.schema';
import { UserCreateOrConnectWithoutReportedToInputSchemaObject } from './UserCreateOrConnectWithoutReportedToInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutReportedToInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutReportedToInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutReportedToInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}