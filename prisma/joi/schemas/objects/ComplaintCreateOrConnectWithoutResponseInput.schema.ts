// @ts-nocheck
import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintCreateWithoutResponseInputSchemaObject } from './ComplaintCreateWithoutResponseInput.schema';
import { ComplaintUncheckedCreateWithoutResponseInputSchemaObject } from './ComplaintUncheckedCreateWithoutResponseInput.schema'

export const ComplaintCreateOrConnectWithoutResponseInputSchemaObject = {
    where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutResponseInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutResponseInputSchemaObject))
}