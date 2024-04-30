// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema';
import { ComplaintCreateOrConnectWithoutReportedToInputSchemaObject } from './ComplaintCreateOrConnectWithoutReportedToInput.schema';
import { ComplaintUpsertWithWhereUniqueWithoutReportedToInputSchemaObject } from './ComplaintUpsertWithWhereUniqueWithoutReportedToInput.schema';
import { ComplaintCreateManyReportedToInputEnvelopeSchemaObject } from './ComplaintCreateManyReportedToInputEnvelope.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithWhereUniqueWithoutReportedToInputSchemaObject } from './ComplaintUpdateWithWhereUniqueWithoutReportedToInput.schema';
import { ComplaintUpdateManyWithWhereWithoutReportedToInputSchemaObject } from './ComplaintUpdateManyWithWhereWithoutReportedToInput.schema';
import { ComplaintScalarWhereInputSchemaObject } from './ComplaintScalarWhereInput.schema'

export const ComplaintUncheckedUpdateManyWithoutReportedToNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject)),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(ComplaintCreateOrConnectWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateOrConnectWithoutReportedToInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(ComplaintUpsertWithWhereUniqueWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUpsertWithWhereUniqueWithoutReportedToInputSchemaObject))),
  createMany: Joi.object().keys(ComplaintCreateManyReportedToInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithWhereUniqueWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUpdateWithWhereUniqueWithoutReportedToInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateManyWithWhereWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUpdateManyWithWhereWithoutReportedToInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(ComplaintScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintScalarWhereInputSchemaObject)))
}