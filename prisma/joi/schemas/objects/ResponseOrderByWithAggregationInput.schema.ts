// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ResponseCountOrderByAggregateInputSchemaObject } from './ResponseCountOrderByAggregateInput.schema';
import { ResponseMaxOrderByAggregateInputSchemaObject } from './ResponseMaxOrderByAggregateInput.schema';
import { ResponseMinOrderByAggregateInputSchemaObject } from './ResponseMinOrderByAggregateInput.schema'

export const ResponseOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  body: SortOrderSchema,
  createdAt: SortOrderSchema,
  complaintId: SortOrderSchema,
  userId: SortOrderSchema,
  _count: Joi.object().keys(ResponseCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(ResponseMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(ResponseMinOrderByAggregateInputSchemaObject)
}