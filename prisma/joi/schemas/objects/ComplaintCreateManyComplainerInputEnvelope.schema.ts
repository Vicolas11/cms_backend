// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateManyComplainerInputSchemaObject } from './ComplaintCreateManyComplainerInput.schema'

export const ComplaintCreateManyComplainerInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(ComplaintCreateManyComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateManyComplainerInputSchemaObject)))
}