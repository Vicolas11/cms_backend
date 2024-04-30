// @ts-nocheck
import Joi from 'joi';
import { AuditTrailCreateWithoutActorInputSchemaObject } from './AuditTrailCreateWithoutActorInput.schema';
import { AuditTrailUncheckedCreateWithoutActorInputSchemaObject } from './AuditTrailUncheckedCreateWithoutActorInput.schema';
import { AuditTrailCreateOrConnectWithoutActorInputSchemaObject } from './AuditTrailCreateOrConnectWithoutActorInput.schema';
import { AuditTrailUpsertWithWhereUniqueWithoutActorInputSchemaObject } from './AuditTrailUpsertWithWhereUniqueWithoutActorInput.schema';
import { AuditTrailCreateManyActorInputEnvelopeSchemaObject } from './AuditTrailCreateManyActorInputEnvelope.schema';
import { AuditTrailWhereUniqueInputSchemaObject } from './AuditTrailWhereUniqueInput.schema';
import { AuditTrailUpdateWithWhereUniqueWithoutActorInputSchemaObject } from './AuditTrailUpdateWithWhereUniqueWithoutActorInput.schema';
import { AuditTrailUpdateManyWithWhereWithoutActorInputSchemaObject } from './AuditTrailUpdateManyWithWhereWithoutActorInput.schema';
import { AuditTrailScalarWhereInputSchemaObject } from './AuditTrailScalarWhereInput.schema'

export const AuditTrailUncheckedUpdateManyWithoutActorNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailCreateWithoutActorInputSchemaObject)),
Joi.object().keys(AuditTrailUncheckedCreateWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailUncheckedCreateWithoutActorInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(AuditTrailCreateOrConnectWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailCreateOrConnectWithoutActorInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(AuditTrailUpsertWithWhereUniqueWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailUpsertWithWhereUniqueWithoutActorInputSchemaObject))),
  createMany: Joi.object().keys(AuditTrailCreateManyActorInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(AuditTrailUpdateWithWhereUniqueWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailUpdateWithWhereUniqueWithoutActorInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(AuditTrailUpdateManyWithWhereWithoutActorInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailUpdateManyWithWhereWithoutActorInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(AuditTrailScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(AuditTrailScalarWhereInputSchemaObject)))
}