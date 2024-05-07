// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateManyReportedToInputSchemaObject } from './ComplaintCreateManyReportedToInput.schema'

export const ComplaintCreateManyReportedToInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(ComplaintCreateManyReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateManyReportedToInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}