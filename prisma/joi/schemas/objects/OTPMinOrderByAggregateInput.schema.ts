// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const OTPMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  otp: SortOrderSchema,
  userId: SortOrderSchema,
  otpExpiration: SortOrderSchema
}