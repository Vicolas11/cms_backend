// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema';
import { ComplaintCreateOrConnectWithoutReportedToInputSchemaObject } from './ComplaintCreateOrConnectWithoutReportedToInput.schema';
import { ComplaintCreateManyReportedToInputEnvelopeSchemaObject } from './ComplaintCreateManyReportedToInputEnvelope.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema'

export const ComplaintCreateNestedManyWithoutReportedToInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject)),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(ComplaintCreateOrConnectWithoutReportedToInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintCreateOrConnectWithoutReportedToInputSchemaObject))),
  createMany: Joi.object().keys(ComplaintCreateManyReportedToInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ComplaintWhereUniqueInputSchemaObject)))
}