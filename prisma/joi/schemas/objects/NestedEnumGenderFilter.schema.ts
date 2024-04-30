// @ts-nocheck
import Joi from 'joi';


export const NestedEnumGenderFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumGenderFilter'))
}