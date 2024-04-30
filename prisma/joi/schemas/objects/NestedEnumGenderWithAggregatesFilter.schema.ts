// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumGenderFilterSchemaObject } from './NestedEnumGenderFilter.schema'

export const NestedEnumGenderWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumGenderWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumGenderFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumGenderFilterSchemaObject)
}