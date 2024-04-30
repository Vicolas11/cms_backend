// @ts-nocheck
import Joi from 'joi';
import { AuditTrailWhereUniqueInputSchemaObject } from './AuditTrailWhereUniqueInput.schema';
import { AuditTrailUpdateWithoutActorInputSchemaObject } from './AuditTrailUpdateWithoutActorInput.schema';
import { AuditTrailUncheckedUpdateWithoutActorInputSchemaObject } from './AuditTrailUncheckedUpdateWithoutActorInput.schema';
import { AuditTrailCreateWithoutActorInputSchemaObject } from './AuditTrailCreateWithoutActorInput.schema';
import { AuditTrailUncheckedCreateWithoutActorInputSchemaObject } from './AuditTrailUncheckedCreateWithoutActorInput.schema'

export const AuditTrailUpsertWithWhereUniqueWithoutActorInputSchemaObject = {
    where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(AuditTrailUpdateWithoutActorInputSchemaObject),
Joi.object().keys(AuditTrailUncheckedUpdateWithoutActorInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateWithoutActorInputSchemaObject),
Joi.object().keys(AuditTrailUncheckedCreateWithoutActorInputSchemaObject))
}