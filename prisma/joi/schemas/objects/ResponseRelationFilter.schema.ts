// @ts-nocheck
import Joi from 'joi';
import { ResponseWhereInputSchemaObject } from './ResponseWhereInput.schema'

export const ResponseRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(ResponseWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(ResponseWhereInputSchemaObject))
}