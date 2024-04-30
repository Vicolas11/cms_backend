// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OTPCountOrderByAggregateInputSchemaObject } from './OTPCountOrderByAggregateInput.schema';
import { OTPMaxOrderByAggregateInputSchemaObject } from './OTPMaxOrderByAggregateInput.schema';
import { OTPMinOrderByAggregateInputSchemaObject } from './OTPMinOrderByAggregateInput.schema'

export const OTPOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  otp: SortOrderSchema,
  userId: SortOrderSchema,
  otpExpiration: SortOrderSchema,
  _count: Joi.object().keys(OTPCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(OTPMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(OTPMinOrderByAggregateInputSchemaObject)
}