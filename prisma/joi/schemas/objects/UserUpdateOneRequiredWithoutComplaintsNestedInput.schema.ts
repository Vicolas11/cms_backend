// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutComplaintsInputSchemaObject } from './UserCreateWithoutComplaintsInput.schema';
import { UserUncheckedCreateWithoutComplaintsInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsInput.schema';
import { UserCreateOrConnectWithoutComplaintsInputSchemaObject } from './UserCreateOrConnectWithoutComplaintsInput.schema';
import { UserUpsertWithoutComplaintsInputSchemaObject } from './UserUpsertWithoutComplaintsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutComplaintsInputSchemaObject } from './UserUpdateWithoutComplaintsInput.schema';
import { UserUncheckedUpdateWithoutComplaintsInputSchemaObject } from './UserUncheckedUpdateWithoutComplaintsInput.schema'

export const UserUpdateOneRequiredWithoutComplaintsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutComplaintsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutComplaintsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutComplaintsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutComplaintsInputSchemaObject))
}