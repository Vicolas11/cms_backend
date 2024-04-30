// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintCreateWithoutComplainerInputSchemaObject } from './ComplaintCreateWithoutComplainerInput.schema';
import { ComplaintUncheckedCreateWithoutComplainerInputSchemaObject } from './ComplaintUncheckedCreateWithoutComplainerInput.schema'

export const ComplaintCreateOrConnectWithoutComplainerInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutComplainerInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutComplainerInputSchemaObject))
}