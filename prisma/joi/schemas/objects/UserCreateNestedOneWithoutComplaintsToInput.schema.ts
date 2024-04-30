// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutComplaintsToInputSchemaObject } from './UserCreateWithoutComplaintsToInput.schema';
import { UserUncheckedCreateWithoutComplaintsToInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsToInput.schema';
import { UserCreateOrConnectWithoutComplaintsToInputSchemaObject } from './UserCreateOrConnectWithoutComplaintsToInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutComplaintsToInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsToInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutComplaintsToInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}