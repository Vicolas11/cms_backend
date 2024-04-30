// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ComplaintCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  subject: SortOrderSchema,
  complain: SortOrderSchema,
  reportedToUserId: SortOrderSchema,
  complainerUserId: SortOrderSchema,
  hasReplied: SortOrderSchema,
  createdAt: SortOrderSchema
}