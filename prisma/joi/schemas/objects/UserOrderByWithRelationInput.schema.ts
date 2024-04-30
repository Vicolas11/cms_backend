// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { BlacklistedTokenOrderByRelationAggregateInputSchemaObject } from './BlacklistedTokenOrderByRelationAggregateInput.schema';
import { AuditTrailOrderByRelationAggregateInputSchemaObject } from './AuditTrailOrderByRelationAggregateInput.schema';
import { ComplaintOrderByRelationAggregateInputSchemaObject } from './ComplaintOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  role: SortOrderSchema,
  name: SortOrderSchema,
  email: SortOrderSchema,
  matricNum: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  otp: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  gender: SortOrderSchema,
  faculty: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  department: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  tokens: Joi.object().keys(BlacklistedTokenOrderByRelationAggregateInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailOrderByRelationAggregateInputSchemaObject),
  complaints: Joi.object().keys(ComplaintOrderByRelationAggregateInputSchemaObject),
  complaintsTo: Joi.object().keys(ComplaintOrderByRelationAggregateInputSchemaObject)
}