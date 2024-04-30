// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema';
import { ComplaintCreateOrConnectWithoutReportedToInputSchemaObject } from './ComplaintCreateOrConnectWithoutReportedToInput.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema'

export const ComplaintUncheckedCreateNestedOneWithoutReportedToInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ComplaintCreateOrConnectWithoutReportedToInputSchemaObject),
  connect: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject)
}