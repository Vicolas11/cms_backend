// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutComplaintsInputSchemaObject } from './UserCreateWithoutComplaintsInput.schema';
import { UserUncheckedCreateWithoutComplaintsInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsInput.schema';
import { UserCreateOrConnectWithoutComplaintsInputSchemaObject } from './UserCreateOrConnectWithoutComplaintsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutComplaintsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutComplaintsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}