// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithoutComplainerInputSchemaObject } from './ComplaintUpdateWithoutComplainerInput.schema';
import { ComplaintUncheckedUpdateWithoutComplainerInputSchemaObject } from './ComplaintUncheckedUpdateWithoutComplainerInput.schema'

export const ComplaintUpdateWithWhereUniqueWithoutComplainerInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutComplainerInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutComplainerInputSchemaObject))
}