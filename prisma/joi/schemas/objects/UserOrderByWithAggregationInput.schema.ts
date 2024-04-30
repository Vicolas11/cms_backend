// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserCountOrderByAggregateInputSchemaObject } from './UserCountOrderByAggregateInput.schema';
import { UserAvgOrderByAggregateInputSchemaObject } from './UserAvgOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputSchemaObject } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputSchemaObject } from './UserMinOrderByAggregateInput.schema';
import { UserSumOrderByAggregateInputSchemaObject } from './UserSumOrderByAggregateInput.schema'

export const UserOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  role: SortOrderSchema,
  name: SortOrderSchema,
  email: SortOrderSchema,
  matricNum: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  otp: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  gender: SortOrderSchema,
  faculty: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  department: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  _count: Joi.object().keys(UserCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(UserAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(UserMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(UserMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(UserSumOrderByAggregateInputSchemaObject)
}