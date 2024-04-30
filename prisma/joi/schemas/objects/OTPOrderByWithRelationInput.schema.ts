// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const OTPOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  otp: SortOrderSchema,
  userId: SortOrderSchema,
  otpExpiration: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}