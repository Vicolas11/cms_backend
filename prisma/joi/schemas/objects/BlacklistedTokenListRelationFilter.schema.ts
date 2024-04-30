// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenWhereInputSchemaObject } from './BlacklistedTokenWhereInput.schema'

export const BlacklistedTokenListRelationFilterSchemaObject = {
    every: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject),
  some: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject),
  none: Joi.object().keys(BlacklistedTokenWhereInputSchemaObject)
}