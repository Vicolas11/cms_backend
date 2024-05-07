// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { ComplaintOrderByWithRelationInputSchemaObject } from './ComplaintOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const ResponseOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  body: SortOrderSchema,
  createdAt: SortOrderSchema,
  complaintId: SortOrderSchema,
  userId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  complaint: Joi.object().keys(ComplaintOrderByWithRelationInputSchemaObject),
  User: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}