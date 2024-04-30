// @ts-nocheck
import Joi from 'joi';
import { NestedEnumDepartmentNullableWithAggregatesFilterSchemaObject } from './NestedEnumDepartmentNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedEnumDepartmentNullableFilterSchemaObject } from './NestedEnumDepartmentNullableFilter.schema'

export const EnumDepartmentNullableWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumDepartmentNullableWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumDepartmentNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumDepartmentNullableFilterSchemaObject)
}