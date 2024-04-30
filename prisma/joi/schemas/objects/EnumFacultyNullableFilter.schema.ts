// @ts-nocheck
import Joi from 'joi';
import { NestedEnumFacultyNullableFilterSchemaObject } from './NestedEnumFacultyNullableFilter.schema'

export const EnumFacultyNullableFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumFacultyNullableFilterSchemaObject))
}