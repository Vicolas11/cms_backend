// @ts-nocheck
import Joi from 'joi';


export const NestedEnumDepartmentNullableFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumDepartmentNullableFilter')),
  isSet: Joi.boolean()
}