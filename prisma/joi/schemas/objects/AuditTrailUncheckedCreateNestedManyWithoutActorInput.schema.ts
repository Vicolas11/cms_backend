// @ts-nocheck
import Joi from 'joi';
import { AuditTrailCreateWithoutActorInputSchemaObject } from './AuditTrailCreateWithoutActorInput.schema';
import { AuditTrailUncheckedCreateWithoutActorInputSchemaObject } from './AuditTrailUncheckedCreateWithoutActorInput.schema';
import { AuditTrailCreateOrConnectWithoutActorInputSchemaObject } from './AuditTrailCreateOrConnectWithoutActorInput.schema';
import { AuditTrailCreateManyActorInputEnvelopeSchemaObject } from './AuditTrailCreateManyActorInputEnvelope.schema';
import { AuditTrailWhereUniqueInputSchemaObject } from './AuditTrailWhereUniqueInput.schema'

export const AuditTrailUncheckedCreateNestedManyWithoutActorInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailCreateWithoutActorInputSchemaObject)),
Joi.object().keys(AuditTrailUncheckedCreateWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailUncheckedCreateWithoutActorInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateOrConnectWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailCreateOrConnectWithoutActorInputSchemaObject))),
  createMany: Joi.object().keys(AuditTrailCreateManyActorInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject)))
}