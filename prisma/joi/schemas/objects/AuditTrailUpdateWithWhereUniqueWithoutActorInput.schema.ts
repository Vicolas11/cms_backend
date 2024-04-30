// @ts-nocheck
import Joi from 'joi';
import { AuditTrailWhereUniqueInputSchemaObject } from './AuditTrailWhereUniqueInput.schema';
import { AuditTrailUpdateWithoutActorInputSchemaObject } from './AuditTrailUpdateWithoutActorInput.schema';
import { AuditTrailUncheckedUpdateWithoutActorInputSchemaObject } from './AuditTrailUncheckedUpdateWithoutActorInput.schema'

export const AuditTrailUpdateWithWhereUniqueWithoutActorInputSchemaObject = {
    where: Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(AuditTrailUpdateWithoutActorInputSchemaObject),
Joi.object().keys(AuditTrailUncheckedUpdateWithoutActorInputSchemaObject))
}