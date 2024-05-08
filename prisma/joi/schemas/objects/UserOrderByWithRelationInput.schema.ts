// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
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
  matricNum: SortOrderSchema,
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  gender: SortOrderSchema,
  faculty: SortOrderSchema,
  department: SortOrderSchema,
  createdAt: SortOrderSchema,
  tokens: Joi.object().keys(BlacklistedTokenOrderByRelationAggregateInputSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailOrderByRelationAggregateInputSchemaObject),
  otp: Joi.object().keys(OTPOrderByWithRelationInputSchemaObject),
  complaints: Joi.object().keys(ComplaintOrderByRelationAggregateInputSchemaObject),
  reportedTo: Joi.object().keys(ComplaintOrderByRelationAggregateInputSchemaObject),
  Response: Joi.object().keys(ResponseOrderByRelationAggregateInputSchemaObject)
}