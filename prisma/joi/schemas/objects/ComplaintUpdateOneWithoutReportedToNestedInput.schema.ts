// @ts-nocheck
import Joi from 'joi';
import { ComplaintCreateWithoutReportedToInputSchemaObject } from './ComplaintCreateWithoutReportedToInput.schema';
import { ComplaintUncheckedCreateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedCreateWithoutReportedToInput.schema';
import { ComplaintCreateOrConnectWithoutReportedToInputSchemaObject } from './ComplaintCreateOrConnectWithoutReportedToInput.schema';
import { ComplaintUpsertWithoutReportedToInputSchemaObject } from './ComplaintUpsertWithoutReportedToInput.schema';
import { ComplaintWhereUniqueInputSchemaObject } from './ComplaintWhereUniqueInput.schema';
import { ComplaintUpdateWithoutReportedToInputSchemaObject } from './ComplaintUpdateWithoutReportedToInput.schema';
import { ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject } from './ComplaintUncheckedUpdateWithoutReportedToInput.schema'

export const ComplaintUpdateOneWithoutReportedToNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ComplaintCreateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedCreateWithoutReportedToInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ComplaintCreateOrConnectWithoutReportedToInputSchemaObject),
  upsert: Joi.object().keys(ComplaintUpsertWithoutReportedToInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateWithoutReportedToInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateWithoutReportedToInputSchemaObject))
}