// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema'

export const ComplaintCreateOrConnectWithoutReportedToInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject))
}