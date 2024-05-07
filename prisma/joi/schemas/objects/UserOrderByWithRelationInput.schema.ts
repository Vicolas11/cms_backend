// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { BlacklistedTokenOrderByRelationAggregateInputSchemaObject } from './BlacklistedTokenOrderByRelationAggregateInput.schema';
import { AuditTrailOrderByRelationAggregateInputSchemaObject } from './AuditTrailOrderByRelationAggregateInput.schema';
import { OTPOrderByWithRelationInputSchemaObject } from './OTPOrderByWithRelationInput.schema';
import { ComplaintOrderByRelationAggregateInputSchemaObject } from './ComplaintOrderByRelationAggregateInput.schema';
import { ResponseOrderByRelationAggregateInputSchemaObject } from './ResponseOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  role: SortOrderSchema,
  name: SortOrderSchema,
  email: SortOrderSchema,
  matricNum: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  gender: SortOrderSchema,
  faculty: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  department: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  tokens: Joi.object().keys(BlacklistedTokenOrderByRelationAggregateInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailOrderByRelationAggregateInputSchemaObject),
  otp: Joi.object().keys(OTPOrderByWithRelationInputSchemaObject),
  complaints: Joi.object().keys(ComplaintOrderByRelationAggregateInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintOrderByRelationAggregateInputSchemaObject),
  Response: Joi.object().keys(ResponseOrderByRelationAggregateInputSchemaObject)
}