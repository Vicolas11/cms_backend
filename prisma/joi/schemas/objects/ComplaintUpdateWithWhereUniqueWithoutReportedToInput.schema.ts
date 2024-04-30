// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithoutReportedToInputSchemaObject } from './ComplaintUpdateWithoutReportedToInput.schema';
import { ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedUpdateWithoutReportedToInput.schema'

export const ComplaintUpdateWithWhereUniqueWithoutReportedToInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject))
}