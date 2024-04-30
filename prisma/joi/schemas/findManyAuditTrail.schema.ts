import Joi from 'joi';
import { AuditTrailWhereInputSchemaObject, AuditTrailOrderByWithRelationInputSchemaObject, AuditTrailWhereUniqueInputSchemaObject } from './objects';
import { AuditTrailScalarFieldEnumSchema } from './enums'

export const AuditTrailFindManySchema = Joi.object().keys({ where: Joi.object().keys(AuditTrailWhereInputSchemaObject), orderBy: Joi.object().keys(AuditTrailOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(AuditTrailScalarFieldEnumSchema)  }).required()