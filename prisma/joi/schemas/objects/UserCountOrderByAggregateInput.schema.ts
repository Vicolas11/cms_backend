// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  role: SortOrderSchema,
  name: SortOrderSchema,
  email: SortOrderSchema,
  matricNum: SortOrderSchema,
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  otp: SortOrderSchema,
  gender: SortOrderSchema,
  faculty: SortOrderSchema,
  department: SortOrderSchema,
  createdAt: SortOrderSchema
}