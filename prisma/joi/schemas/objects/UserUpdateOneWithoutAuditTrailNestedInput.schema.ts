// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutAuditTrailInputSchemaObject } from './UserCreateWithoutAuditTrailInput.schema';
import { UserUncheckedCreateWithoutAuditTrailInputSchemaObject } from './UserUncheckedCreateWithoutAuditTrailInput.schema';
import { UserCreateOrConnectWithoutAuditTrailInputSchemaObject } from './UserCreateOrConnectWithoutAuditTrailInput.schema';
import { UserUpsertWithoutAuditTrailInputSchemaObject } from './UserUpsertWithoutAuditTrailInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAuditTrailInputSchemaObject } from './UserUpdateWithoutAuditTrailInput.schema';
import { UserUncheckedUpdateWithoutAuditTrailInputSchemaObject } from './UserUncheckedUpdateWithoutAuditTrailInput.schema'

export const UserUpdateOneWithoutAuditTrailNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAuditTrailInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAuditTrailInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutAuditTrailInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutAuditTrailInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutAuditTrailInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutAuditTrailInputSchemaObject))
}