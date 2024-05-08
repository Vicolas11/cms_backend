// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateManyUserInputSchemaObject } from './BlacklistedTokenCreateManyUserInput.schema'

export const BlacklistedTokenCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenCreateManyUserInputSchemaObject)))
}