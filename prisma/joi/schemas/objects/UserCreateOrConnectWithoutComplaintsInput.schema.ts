// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutComplaintsInputSchemaObject } from './UserCreateWithoutComplaintsInput.schema';
import { UserUncheckedCreateWithoutComplaintsInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsInput.schema'

export const UserCreateOrConnectWithoutComplaintsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsInputSchemaObject))
}