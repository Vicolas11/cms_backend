// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ComplaintCountOrderByAggregateInputSchemaObject } from './ComplaintCountOrderByAggregateInput.schema';
import { ComplaintMaxOrderByAggregateInputSchemaObject } from './ComplaintMaxOrderByAggregateInput.schema';
import { ComplaintMinOrderByAggregateInputSchemaObject } from './ComplaintMinOrderByAggregateInput.schema'

export const ComplaintOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  subject: SortOrderSchema,
  body: SortOrderSchema,
  reportedToUserId: SortOrderSchema,
  complainerUserId: SortOrderSchema,
  hasReplied: SortOrderSchema,
  hasOpened: SortOrderSchema,
  createdAt: SortOrderSchema,
  responseId: SortOrderSchema,
  _count: Joi.object().keys(ComplaintCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(ComplaintMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(ComplaintMinOrderByAggregateInputSchemaObject)
}