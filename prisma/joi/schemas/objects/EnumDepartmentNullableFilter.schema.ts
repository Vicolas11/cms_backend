// @ts-nocheck
import Joi from 'joi';
import { NestedEnumDepartmentNullableFilterSchemaObject } from './NestedEnumDepartmentNullableFilter.schema'

export const EnumDepartmentNullableFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumDepartmentNullableFilterSchemaObject)),
  isSet: Joi.boolean()
}