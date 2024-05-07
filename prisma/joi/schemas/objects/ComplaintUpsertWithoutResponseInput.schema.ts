// @ts-nocheck
import Joi from 'joi';
import { ComplaintUpdateWithoutResponseInputSchemaObject } from './ComplaintUpdateWithoutResponseInput.schema';
import { ComplaintUncheckedUpdateWithoutResponseInputSchemaObject } from './ComplaintUncheckedUpdateWithoutResponseInput.schema';
import { ComplaintCreateWithoutResponseInputSchemaObject } from './ComplaintCreateWithoutResponseInput.schema';
import { ComplaintUncheckedCreateWithoutResponseInputSchemaObject } from './ComplaintUncheckedCreateWithoutResponseInput.schema'

export const ComplaintUpsertWithoutResponseInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutResponseInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutResponseInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutResponseInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutResponseInputSchemaObject))
}