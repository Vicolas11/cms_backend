import Joi from 'joi';
import { AuditTrailCreateInputSchemaObject } from './objects'

export const AuditTrailCreateSchema = Joi.object().keys({ data: Joi.object().keys(AuditTrailCreateInputSchemaObject)  }).required()