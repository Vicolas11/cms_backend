// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { EnumRoleWithAggregatesFilterSchemaObject } from './EnumRoleWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { EnumGenderWithAggregatesFilterSchemaObject } from './EnumGenderWithAggregatesFilter.schema';
import { EnumFacultyNullableWithAggregatesFilterSchemaObject } from './EnumFacultyNullableWithAggregatesFilter.schema';
import { EnumDepartmentNullableWithAggregatesFilterSchemaObject } from './EnumDepartmentNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const UserScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleWithAggregatesFilterSchemaObject)),
  name: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  matricNum: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  avatar: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderWithAggregatesFilterSchemaObject)),
  faculty: Joi.alternatives().try(Joi.object().keys(EnumFacultyNullableWithAggregatesFilterSchemaObject)),
  department: Joi.alternatives().try(Joi.object().keys(EnumDepartmentNullableWithAggregatesFilterSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}