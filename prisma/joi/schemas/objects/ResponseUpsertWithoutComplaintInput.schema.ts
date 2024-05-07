// @ts-nocheck
import Joi from 'joi';
import { ResponseUpdateWithoutComplaintInputSchemaObject } from './ResponseUpdateWithoutComplaintInput.schema';
import { ResponseUncheckedUpdateWithoutComplaintInputSchemaObject } from './ResponseUncheckedUpdateWithoutComplaintInput.schema';
import { ResponseCreateWithoutComplaintInputSchemaObject } from './ResponseCreateWithoutComplaintInput.schema';
import { ResponseUncheckedCreateWithoutComplaintInputSchemaObject } from './ResponseUncheckedCreateWithoutComplaintInput.schema'

export const ResponseUpsertWithoutComplaintInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(ResponseUpdateWithoutComplaintInputSchemaObject),
Joi.object().keys(ResponseUncheckedUpdateWithoutComplaintInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutComplaintInputSchemaObject),
Joi.object().keys(ResponseUncheckedCreateWithoutComplaintInputSchemaObject))
}