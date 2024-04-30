// @ts-nocheck
import Joi from 'joi';
import { AuditTrailWhereInputSchemaObject } from './AuditTrailWhereInput.schema'

export const AuditTrailListRelationFilterSchemaObject = {
    every: Joi.object().keys(AuditTrailWhereInputSchemaObject),
  some: Joi.object().keys(AuditTrailWhereInputSchemaObject),
  none: Joi.object().keys(AuditTrailWhereInputSchemaObject)
}