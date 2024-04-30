import Joi from 'joi';
import { AuditTrailWhereInputSchemaObject, AuditTrailOrderByWithRelationInputSchemaObject, AuditTrailWhereUniqueInputSchemaObject } from './objects'

export const AuditTrailAggregateSchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereInputSchemaObject), orderBy: Joi.object().keys(AuditTrailOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()