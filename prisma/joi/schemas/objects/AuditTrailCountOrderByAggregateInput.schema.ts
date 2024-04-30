// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AuditTrailCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  actorId: SortOrderSchema,
  action: SortOrderSchema,
  message: SortOrderSchema,
  status: SortOrderSchema,
  ipAddress: SortOrderSchema,
  userAgent: SortOrderSchema,
  timestramp: SortOrderSchema
}