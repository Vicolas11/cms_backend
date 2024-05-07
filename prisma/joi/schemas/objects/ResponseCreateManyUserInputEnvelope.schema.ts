// @ts-nocheck
import Joi from 'joi';
import { ResponseCreateManyUserInputSchemaObject } from './ResponseCreateManyUserInput.schema'

export const ResponseCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(ResponseCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}