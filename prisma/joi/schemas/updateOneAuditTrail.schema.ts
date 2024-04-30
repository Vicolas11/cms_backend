import Joi from 'joi';
import { AuditTrailUpdateInputSchemaObject, AuditTrailWhereUniqueInputSchemaObject } from './objects'

export const AuditTrailUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(AuditTrailUpdateInputSchemaObject), where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject)  }).required()