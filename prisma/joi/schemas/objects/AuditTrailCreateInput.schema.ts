// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutAuditTrailInputSchemaObject } from './UserCreateNestedOneWithoutAuditTrailInput.schema'

export const AuditTrailCreateInputSchemaObject = {
    id: Joi.string(),
  action: Joi.string().required(),
  message: Joi.string().required(),
  status: Joi.number(),
  ipAddress: Joi.string().required(),
  userAgent: Joi.string().required(),
  timestramp: Joi.date(),
  actor: Joi.object().keys(UserCreateNestedOneWithoutAuditTrailInputSchemaObject)
}