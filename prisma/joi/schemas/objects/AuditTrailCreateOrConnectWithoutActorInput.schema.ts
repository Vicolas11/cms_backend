// @ts-nocheck
import Joi from 'joi';
import { AuditTrailWhereUniqueInputSchemaObject } from './AuditTrailWhereUniqueInput.schema';
import { AuditTrailCreateWithoutActorInputSchemaObject } from './AuditTrailCreateWithoutActorInput.schema';
import { AuditTrailUncheckedCreateWithoutActorInputSchemaObject } from './AuditTrailUncheckedCreateWithoutActorInput.schema'

export const AuditTrailCreateOrConnectWithoutActorInputSchemaObject = {
    where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateWithoutActorInputSchemaObject),
Joi.object().keys(AuditTrailUncheckedCreateWithoutActorInputSchemaObject))
}