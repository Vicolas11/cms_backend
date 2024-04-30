import Joi from 'joi';
import { AuditTrailWhereInputSchemaObject, AuditTrailOrderByWithAggregationInputSchemaObject, AuditTrailScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { AuditTrailScalarFieldEnumSchema } from './enums'

export const AuditTrailGroupBySchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereInputSchemaObject), orderBy: Joi.object().keys(AuditTrailOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(AuditTrailScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(AuditTrailScalarFieldEnumSchema).required()  }).required()