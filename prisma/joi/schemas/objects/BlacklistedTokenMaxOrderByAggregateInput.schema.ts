// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BlacklistedTokenMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  userId: SortOrderSchema,
  token: SortOrderSchema,
  createdAt: SortOrderSchema
}