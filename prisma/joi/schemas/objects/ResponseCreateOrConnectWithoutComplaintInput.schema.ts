// @ts-nocheck
import Joi from 'joi';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema';
import { ResponseCreateWithoutComplaintInputSchemaObject } from './ResponseCreateWithoutComplaintInput.schema';
import { ResponseUncheckedCreateWithoutComplaintInputSchemaObject } from './ResponseUncheckedCreateWithoutComplaintInput.schema'

export const ResponseCreateOrConnectWithoutComplaintInputSchemaObject = {
    where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutComplaintInputSchemaObject),
Joi.object().keys(ResponseUncheckedCreateWithoutComplaintInputSchemaObject))
}