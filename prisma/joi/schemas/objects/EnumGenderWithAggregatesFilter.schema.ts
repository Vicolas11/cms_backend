// @ts-nocheck
import Joi from 'joi';
import { NestedEnumGenderWithAggregatesFilterSchemaObject } from './NestedEnumGenderWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumGenderFilterSchemaObject } from './NestedEnumGenderFilter.schema'

export const EnumGenderWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumGenderWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumGenderFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumGenderFilterSchemaObject)
}