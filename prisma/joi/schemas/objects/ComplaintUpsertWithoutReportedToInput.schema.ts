// @ts-nocheck
import Joi from 'joi';
import { ComplaintUpdateWithoutReportedToInputSchemaObject } from './ComplaintUpdateWithoutReportedToInput.schema';
import { ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedUpdateWithoutReportedToInput.schema';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema'

export const ComplaintUpsertWithoutReportedToInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject))
}