// @ts-nocheck
import Joi from 'joi';
import { NestedEnumFacultyNullableWithAggregatesFilterSchemaObject } from './NestedEnumFacultyNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedEnumFacultyNullableFilterSchemaObject } from './NestedEnumFacultyNullableFilter.schema'

export const EnumFacultyNullableWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumFacultyNullableWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumFacultyNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumFacultyNullableFilterSchemaObject)
}