// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAuditTrailInputSchemaObject } from './UserCreateWithoutAuditTrailInput.schema';
import { UserUncheckedCreateWithoutAuditTrailInputSchemaObject } from './UserUncheckedCreateWithoutAuditTrailInput.schema'

export const UserCreateOrConnectWithoutAuditTrailInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAuditTrailInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAuditTrailInputSchemaObject))
}