// @ts-nocheck
import Joi from 'joi';
import { AuditTrailCreateManyActorInputSchemaObject } from './AuditTrailCreateManyActorInput.schema'

export const AuditTrailCreateManyActorInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateManyActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailCreateManyActorInputSchemaObject)))
}