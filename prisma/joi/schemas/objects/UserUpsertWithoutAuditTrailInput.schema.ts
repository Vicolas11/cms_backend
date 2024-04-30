// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutAuditTrailInputSchemaObject } from './UserUpdateWithoutAuditTrailInput.schema';
import { UserUncheckedUpdateWithoutAuditTrailInputSchemaObject } from './UserUncheckedUpdateWithoutAuditTrailInput.schema';
import { UserCreateWithoutAuditTrailInputSchemaObject } from './UserCreateWithoutAuditTrailInput.schema';
import { UserUncheckedCreateWithoutAuditTrailInputSchemaObject } from './UserUncheckedCreateWithoutAuditTrailInput.schema'

export const UserUpsertWithoutAuditTrailInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutAuditTrailInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutAuditTrailInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAuditTrailInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAuditTrailInputSchemaObject))
}