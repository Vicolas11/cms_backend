import Joi from 'joi';
import { AuditTrailUpdateManyMutationInputSchemaObject, AuditTrailWhereInputSchemaObject } from './objects'

export const AuditTrailUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(AuditTrailUpdateManyMutationInputSchemaObject), where: Joi.object().keys(AuditTrailWhereInputSchemaObject)  }).required()