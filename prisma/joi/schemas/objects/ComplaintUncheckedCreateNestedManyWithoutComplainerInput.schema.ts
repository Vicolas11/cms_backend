// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutComplainerInputSchemaObject } from './ComplaintCreateWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateWithoutComplainerInput.schema';
import { ComplaintCreateOrConnectWithoutComplainerInputSchemaObject } from './ComplaintCreateOrConnectWithoutComplainerInput.schema';
import { ComplaintCreateManyComplainerInputEnvelopeSchemaObject } from './ComplaintCreateManyComplainerInputEnvelope.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema'

export const ComplaintUncheckedCreateNestedManyWithoutComplainerInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateWithoutComplainerInputSchemaObject)),
Joi.object().keys(ComplaintUncheckedCreateWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUncheckedCreateWithoutComplainerInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(ComplaintCreateOrConnectWithoutComplainerInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateOrConnectWithoutComplainerInputSchemaObject))),
  createMany: Joi.object().keys(ComplaintCreateManyComplainerInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject)))
}