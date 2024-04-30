// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutComplaintsToInputSchemaObject } from './UserCreateWithoutComplaintsToInput.schema';
import { UserUncheckedCreateWithoutComplaintsToInputSchemaObject } from './UserUncheckedCreateWithoutComplaintsToInput.schema'

export const UserCreateOrConnectWithoutComplaintsToInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutComplaintsToInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutComplaintsToInputSchemaObject))
}