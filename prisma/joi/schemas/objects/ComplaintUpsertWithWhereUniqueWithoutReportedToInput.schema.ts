// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithoutReportedToInputSchemaObject } from './ComplaintUpdateWithoutReportedToInput.schema';
import { ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedUpdateWithoutReportedToInput.schema';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema'

export const ComplaintUpsertWithWhereUniqueWithoutReportedToInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject))
}