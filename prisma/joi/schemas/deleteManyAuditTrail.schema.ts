import Joi from 'joi';
import { AuditTrailWhereInputSchemaObject } from './objects'

export const AuditTrailDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereInputSchemaObject)  }).required()