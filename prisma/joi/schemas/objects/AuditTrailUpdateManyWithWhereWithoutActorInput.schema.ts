// @ts-nocheck
import Joi from 'joi';
import { AuditTrailScalarWhereInputSchemaObject } from './AuditTrailScalarWhereInput.schema';
import { AuditTrailUpdateManyMutationInputSchemaObject } from './AuditTrailUpdateManyMutationInput.schema';
import { AuditTrailUncheckedUpdateManyWithoutAuditTrailInputSchemaObject } from './AuditTrailUncheckedUpdateManyWithoutAuditTrailInput.schema'

export const AuditTrailUpdateManyWithWhereWithoutActorInputSchemaObject = {
    where: Joi.object().keys(AuditTrailScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(AuditTrailUpdateManyMutationInputSchemaObject),
Joi.object().keys(AuditTrailUncheckedUpdateManyWithoutAuditTrailInputSchemaObject))
}