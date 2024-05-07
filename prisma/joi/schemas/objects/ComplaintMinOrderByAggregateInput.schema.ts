// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const ComplaintMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  subject: SortOrderSchema,
  body: SortOrderSchema,
  reportedToUserId: SortOrderSchema,
  complainerUserId: SortOrderSchema,
  hasReplied: SortOrderSchema,
  hasOpened: SortOrderSchema,
  createdAt: SortOrderSchema,
  responseId: SortOrderSchema
}