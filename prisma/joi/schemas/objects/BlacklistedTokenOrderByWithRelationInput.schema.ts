// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const BlacklistedTokenOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  userId: SortOrderSchema,
  token: SortOrderSchema,
  createdAt: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}