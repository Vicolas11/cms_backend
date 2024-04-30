// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereInputSchemaObject } from './ComplaintWhereInput.schema'

export const ComplaintRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(ComplaintWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(ComplaintWhereInputSchemaObject))
}