// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereInputSchemaObject } from './ComplaintWhereInput.schema'

export const ComplaintListRelationFilterSchemaObject = {
    every: Joi.object().keys(ComplaintWhereInputSchemaObject),
  some: Joi.object().keys(ComplaintWhereInputSchemaObject),
  none: Joi.object().keys(ComplaintWhereInputSchemaObject)
}