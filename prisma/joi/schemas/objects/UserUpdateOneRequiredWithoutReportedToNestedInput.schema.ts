// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutReportedToInputSchemaObject } from './UserCreateWithoutReportedToInput.schema';
import { UserUncheckedCreateWithoutReportedToInputSchemaObject } from './UserUncheckedCreateWithoutReportedToInput.schema';
import { UserCreateOrConnectWithoutReportedToInputSchemaObject } from './UserCreateOrConnectWithoutReportedToInput.schema';
import { UserUpsertWithoutReportedToInputSchemaObject } from './UserUpsertWithoutReportedToInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReportedToInputSchemaObject } from './UserUpdateWithoutReportedToInput.schema';
import { UserUncheckedUpdateWithoutReportedToInputSchemaObject } from './UserUncheckedUpdateWithoutReportedToInput.schema'

export const UserUpdateOneRequiredWithoutReportedToNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutReportedToInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutReportedToInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutReportedToInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutReportedToInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutReportedToInputSchemaObject))
}