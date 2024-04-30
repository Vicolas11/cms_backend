// @ts-nocheck
import Joi from 'joi';


export const NestedEnumFacultyNullableFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumFacultyNullableFilter'))
}