// @ts-nocheck
import Joi from 'joi';
import { ResponseCreateWithoutComplaintInputSchemaObject } from './ResponseCreateWithoutComplaintInput.schema';
import { ResponseUncheckedCreateWithoutComplaintInputSchemaObject } from './ResponseUncheckedCreateWithoutComplaintInput.schema';
import { ResponseCreateOrConnectWithoutComplaintInputSchemaObject } from './ResponseCreateOrConnectWithoutComplaintInput.schema';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema'

export const ResponseCreateNestedOneWithoutComplaintInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutComplaintInputSchemaObject),
Joi.object().keys(ResponseUncheckedCreateWithoutComplaintInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ResponseCreateOrConnectWithoutComplaintInputSchemaObject),
  connect: Joi.object().keys(ResponseWhereUniqueInputSchemaObject)
}