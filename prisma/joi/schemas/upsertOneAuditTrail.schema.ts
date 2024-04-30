import Joi from 'joi';
import { AuditTrailWhereUniqueInputSchemaObject, AuditTrailCreateInputSchemaObject, AuditTrailUpdateInputSchemaObject } from './objects'

export const AuditTrailUpsertSchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject), data: Joi.object().keys(AuditTrailCreateInputSchemaObject), update: Joi.object().keys(AuditTrailUpdateInputSchemaObject)  }).required()