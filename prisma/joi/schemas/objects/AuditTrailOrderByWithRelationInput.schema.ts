// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const AuditTrailOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  actorId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  action: SortOrderSchema,
  message: SortOrderSchema,
  status: SortOrderSchema,
  ipAddress: SortOrderSchema,
  userAgent: SortOrderSchema,
  timestramp: SortOrderSchema,
  actor: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}