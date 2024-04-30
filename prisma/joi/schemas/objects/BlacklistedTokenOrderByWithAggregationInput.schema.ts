// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BlacklistedTokenCountOrderByAggregateInputSchemaObject } from './BlacklistedTokenCountOrderByAggregateInput.schema';
import { BlacklistedTokenMaxOrderByAggregateInputSchemaObject } from './BlacklistedTokenMaxOrderByAggregateInput.schema';
import { BlacklistedTokenMinOrderByAggregateInputSchemaObject } from './BlacklistedTokenMinOrderByAggregateInput.schema'

export const BlacklistedTokenOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  userId: SortOrderSchema,
  token: SortOrderSchema,
  createdAt: SortOrderSchema,
  _count: Joi.object().keys(BlacklistedTokenCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(BlacklistedTokenMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(BlacklistedTokenMinOrderByAggregateInputSchemaObject)
}