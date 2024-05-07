// @ts-nocheck
import Joi from 'joi';
import { ResponseCreateWithoutComplaintInputSchemaObject } from './ResponseCreateWithoutComplaintInput.schema';
import { ResponseUncheckedCreateWithoutComplaintInputSchemaObject } from './ResponseUncheckedCreateWithoutComplaintInput.schema';
import { ResponseCreateOrConnectWithoutComplaintInputSchemaObject } from './ResponseCreateOrConnectWithoutComplaintInput.schema';
import { ResponseUpsertWithoutComplaintInputSchemaObject } from './ResponseUpsertWithoutComplaintInput.schema';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema';
import { ResponseUpdateWithoutComplaintInputSchemaObject } from './ResponseUpdateWithoutComplaintInput.schema';
import { ResponseUncheckedUpdateWithoutComplaintInputSchemaObject } from './ResponseUncheckedUpdateWithoutComplaintInput.schema'

export const ResponseUpdateOneWithoutComplaintNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutComplaintInputSchemaObject),
Joi.object().keys(ResponseUncheckedCreateWithoutComplaintInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ResponseCreateOrConnectWithoutComplaintInputSchemaObject),
  upsert: Joi.object().keys(ResponseUpsertWithoutComplaintInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ResponseUpdateWithoutComplaintInputSchemaObject),
Joi.object().keys(ResponseUncheckedUpdateWithoutComplaintInputSchemaObject))
}