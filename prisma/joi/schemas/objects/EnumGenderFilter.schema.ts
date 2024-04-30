// @ts-nocheck
import Joi from 'joi';
import { NestedEnumGenderFilterSchemaObject } from './NestedEnumGenderFilter.schema'

export const EnumGenderFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumGenderFilterSchemaObject))
}