// @ts-nocheck
import Joi from 'joi';
import { ResponseWhereInputSchemaObject } from './ResponseWhereInput.schema'

export const ResponseListRelationFilterSchemaObject = {
    every: Joi.object().keys(ResponseWhereInputSchemaObject),
  some: Joi.object().keys(ResponseWhereInputSchemaObject),
  none: Joi.object().keys(ResponseWhereInputSchemaObject)
}