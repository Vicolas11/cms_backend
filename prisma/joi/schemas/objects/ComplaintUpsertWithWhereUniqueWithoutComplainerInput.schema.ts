// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithoutComplainerInputSchemaObject } from './ComplaintUpdateWithoutComplainerInput.schema';
import { ComplaintUncheckedUpdateWithoutComplainerInputSchemaObject } from './ComplaintUncheckedUpdateWithoutComplainerInput.schema';
import { ComplaintCreateWithoutComplainerInputSchemaObject } from './ComplaintCreateWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateWithoutComplainerInput.schema'

export const ComplaintUpsertWithWhereUniqueWithoutComplainerInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutComplainerInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutComplainerInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutComplainerInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutComplainerInputSchemaObject))
}