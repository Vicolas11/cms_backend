// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ResponseMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  body: SortOrderSchema,
  createdAt: SortOrderSchema,
  complaintId: SortOrderSchema,
  userId: SortOrderSchema
}