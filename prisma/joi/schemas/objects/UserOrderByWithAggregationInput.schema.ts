// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputSchemaObject } from './UserCountOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputSchemaObject } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputSchemaObject } from './UserMinOrderByAggregateInput.schema'

export const UserOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  role: SortOrderSchema,
  name: SortOrderSchema,
  email: SortOrderSchema,
  matricNum: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  gender: SortOrderSchema,
  faculty: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  department: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  _count: Joi.object().keys(UserCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(UserMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(UserMinOrderByAggregateInputSchemaObject)
}