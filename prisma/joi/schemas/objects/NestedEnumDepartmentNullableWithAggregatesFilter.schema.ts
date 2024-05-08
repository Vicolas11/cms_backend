// @ts-nocheck
import Joi from 'joi';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedEnumDepartmentNullableFilterSchemaObject } from './NestedEnumDepartmentNullableFilter.schema'

export const NestedEnumDepartmentNullableWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumDepartmentNullableWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumDepartmentNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumDepartmentNullableFilterSchemaObject),
  isSet: Joi.boolean()
}