// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const AuditTrailOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  actorId: SortOrderSchema,
  action: SortOrderSchema,
  message: SortOrderSchema,
  status: SortOrderSchema,
  ipAddress: SortOrderSchema,
  userAgent: SortOrderSchema,
  timestramp: SortOrderSchema,
  actor: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}