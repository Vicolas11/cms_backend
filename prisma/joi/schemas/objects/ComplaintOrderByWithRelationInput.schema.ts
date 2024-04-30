// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const ComplaintOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  subject: SortOrderSchema,
  complain: SortOrderSchema,
  reportedToUserId: SortOrderSchema,
  complainerUserId: SortOrderSchema,
  hasReplied: SortOrderSchema,
  createdAt: SortOrderSchema,
  reportedTo: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  complainer: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}