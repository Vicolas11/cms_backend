// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutComplaintsToInputSchemaObject } from './UserCreateWithoutComplaintsToInput.schema';
import { UserUncheckedCreateWithoutComplaintsToInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsToInput.schema';
import { UserCreateOrConnectWithoutComplaintsToInputSchemaObject } from './UserCreateOrConnectWithoutComplaintsToInput.schema';
import { UserUpsertWithoutComplaintsToInputSchemaObject } from './UserUpsertWithoutComplaintsToInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutComplaintsToInputSchemaObject } from './UserUpdateWithoutComplaintsToInput.schema';
import { UserUncheckedUpdateWithoutComplaintsToInputSchemaObject } from './UserUncheckedUpdateWithoutComplaintsToInput.schema'

export const UserUpdateOneRequiredWithoutComplaintsToNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsToInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutComplaintsToInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutComplaintsToInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutComplaintsToInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutComplaintsToInputSchemaObject))
}