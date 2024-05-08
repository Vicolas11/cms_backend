// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AuditTrailCountOrderByAggregateInputSchemaObject } from './AuditTrailCountOrderByAggregateInput.schema';
import { AuditTrailAvgOrderByAggregateInputSchemaObject } from './AuditTrailAvgOrderByAggregateInput.schema';
import { AuditTrailMaxOrderByAggregateInputSchemaObject } from './AuditTrailMaxOrderByAggregateInput.schema';
import { AuditTrailMinOrderByAggregateInputSchemaObject } from './AuditTrailMinOrderByAggregateInput.schema';
import { AuditTrailSumOrderByAggregateInputSchemaObject } from './AuditTrailSumOrderByAggregateInput.schema'

export const AuditTrailOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  actorId: SortOrderSchema,
  action: SortOrderSchema,
  message: SortOrderSchema,
  status: SortOrderSchema,
  ipAddress: SortOrderSchema,
  userAgent: SortOrderSchema,
  timestramp: SortOrderSchema,
  _count: Joi.object().keys(AuditTrailCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(AuditTrailAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(AuditTrailMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(AuditTrailMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(AuditTrailSumOrderByAggregateInputSchemaObject)
}