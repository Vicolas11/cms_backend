// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutResponseInputSchemaObject } from './ComplaintCreateWithoutResponseInput.schema';
import { ComplaintUncheckedCreateWithoutResponseInputSchemaObject } from './ComplaintUncheckedCreateWithoutResponseInput.schema';
import { ComplaintCreateOrConnectWithoutResponseInputSchemaObject } from './ComplaintCreateOrConnectWithoutResponseInput.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema'

export const ComplaintCreateNestedOneWithoutResponseInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutResponseInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutResponseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ComplaintCreateOrConnectWithoutResponseInputSchemaObject),
  connect: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject)
}