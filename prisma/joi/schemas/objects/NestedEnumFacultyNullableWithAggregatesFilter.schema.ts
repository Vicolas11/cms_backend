// @ts-nocheck
import Joi from 'joi';
import { NestedIntNullableFilterSchemaObject } from './NestedIntNullableFilter.schema';
import { NestedEnumFacultyNullableFilterSchemaObject } from './NestedEnumFacultyNullableFilter.schema'

export const NestedEnumFacultyNullableWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumFacultyNullableWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntNullableFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumFacultyNullableFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumFacultyNullableFilterSchemaObject),
  isSet: Joi.boolean()
}