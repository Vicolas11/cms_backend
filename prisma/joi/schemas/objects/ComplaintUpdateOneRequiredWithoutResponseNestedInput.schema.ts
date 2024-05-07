// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutResponseInputSchemaObject } from './ComplaintCreateWithoutResponseInput.schema';
import { ComplaintUncheckedCreateWithoutResponseInputSchemaObject } from './ComplaintUncheckedCreateWithoutResponseInput.schema';
import { ComplaintCreateOrConnectWithoutResponseInputSchemaObject } from './ComplaintCreateOrConnectWithoutResponseInput.schema';
import { ComplaintUpsertWithoutResponseInputSchemaObject } from './ComplaintUpsertWithoutResponseInput.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithoutResponseInputSchemaObject } from './ComplaintUpdateWithoutResponseInput.schema';
import { ComplaintUncheckedUpdateWithoutResponseInputSchemaObject } from './ComplaintUncheckedUpdateWithoutResponseInput.schema'

export const ComplaintUpdateOneRequiredWithoutResponseNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutResponseInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutResponseInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ComplaintCreateOrConnectWithoutResponseInputSchemaObject),
  upsert: Joi.object().keys(ComplaintUpsertWithoutResponseInputSchemaObject),
  connect: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutResponseInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutResponseInputSchemaObject))
}