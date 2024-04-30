// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReportedToInputSchemaObject } from './UserCreateWithoutReportedToInput.schema';
import { UserUncheckedCreateWithoutReportedToInputSchemaObject } from './UserUncheckedCreateWithoutReportedToInput.schema'

export const UserCreateOrConnectWithoutReportedToInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutReportedToInputSchemaObject))
}