// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutComplainerInputSchemaObject } from './ComplaintCreateWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateWithoutComplainerInput.schema';
import { ComplaintCreateOrConnectWithoutComplainerInputSchemaObject } from './ComplaintCreateOrConnectWithoutComplainerInput.schema';
import { ComplaintUpsertWithWhereUniqueWithoutComplainerInputSchemaObject } from './ComplaintUpsertWithWhereUniqueWithoutComplainerInput.schema';
import { ComplaintCreateManyComplainerInputEnvelopeSchemaObject } from './ComplaintCreateManyComplainerInputEnvelope.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithWhereUniqueWithoutComplainerInputSchemaObject } from './ComplaintUpdateWithWhereUniqueWithoutComplainerInput.schema';
import { ComplaintUpdateManyWithWhereWithoutComplainerInputSchemaObject } from './ComplaintUpdateManyWithWhereWithoutComplainerInput.schema';
import { ComplaintScalarWhereInputSchemaObject } from './ComplaintScalarWhereInput.schema'

export const ComplaintUncheckedUpdateManyWithoutComplainerNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateWithoutComplainerInputSchemaObject)),
Joi.object().keys(ComplaintUncheckedCreateWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUncheckedCreateWithoutComplainerInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(ComplaintCreateOrConnectWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateOrConnectWithoutComplainerInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(ComplaintUpsertWithWhereUniqueWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUpsertWithWhereUniqueWithoutComplainerInputSchemaObject))),
  createMany: Joi.object().keys(ComplaintCreateManyComplainerInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithWhereUniqueWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUpdateWithWhereUniqueWithoutComplainerInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateManyWithWhereWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUpdateManyWithWhereWithoutComplainerInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(ComplaintScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintScalarWhereInputSchemaObject)))
}