// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema'

export const ResponseScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ResponseScalarWhereInput'),
Joi.array().items(Joi.link('#ResponseScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#ResponseScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ResponseScalarWhereInput'),
Joi.array().items(Joi.link('#ResponseScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  body: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  complaintId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string())
}