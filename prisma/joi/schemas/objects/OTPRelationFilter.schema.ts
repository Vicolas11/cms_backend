// @ts-nocheck
import Joi from 'joi';
import { OTPWhereInputSchemaObject } from './OTPWhereInput.schema'

export const OTPRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(OTPWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(OTPWhereInputSchemaObject))
}