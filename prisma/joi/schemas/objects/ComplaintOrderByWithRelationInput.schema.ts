// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';
import { ResponseOrderByWithRelationInputSchemaObject } from './ResponseOrderByWithRelationInput.schema'

export const ComplaintOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  subject: SortOrderSchema,
  body: SortOrderSchema,
  reportedToUserId: SortOrderSchema,
  complainerUserId: SortOrderSchema,
  hasReplied: SortOrderSchema,
  hasOpened: SortOrderSchema,
  createdAt: SortOrderSchema,
  responseId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  reportedTo: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  complainer: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  response: Joi.object().keys(ResponseOrderByWithRelationInputSchemaObject)
}