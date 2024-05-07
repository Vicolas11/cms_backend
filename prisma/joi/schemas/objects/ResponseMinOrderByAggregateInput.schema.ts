// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ResponseMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  body: SortOrderSchema,
  createdAt: SortOrderSchema,
  complaintId: SortOrderSchema,
  userId: SortOrderSchema
}