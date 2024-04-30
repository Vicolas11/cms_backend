import Joi from 'joi';
import { AuditTrailWhereUniqueInputSchemaObject } from './objects'

export const AuditTrailDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject)  }).required()