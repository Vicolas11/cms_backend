import Joi from 'joi';
import { AuditTrailWhereUniqueInputSchemaObject } from './objects'

export const AuditTrailFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject) }).required()