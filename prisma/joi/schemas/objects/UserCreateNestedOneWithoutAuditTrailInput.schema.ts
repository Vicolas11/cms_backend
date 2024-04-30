// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutAuditTrailInputSchemaObject } from './UserCreateWithoutAuditTrailInput.schema';
import { UserUncheckedCreateWithoutAuditTrailInputSchemaObject } from './UserUncheckedCreateWithoutAuditTrailInput.schema';
import { UserCreateOrConnectWithoutAuditTrailInputSchemaObject } from './UserCreateOrConnectWithoutAuditTrailInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutAuditTrailInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAuditTrailInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAuditTrailInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutAuditTrailInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}