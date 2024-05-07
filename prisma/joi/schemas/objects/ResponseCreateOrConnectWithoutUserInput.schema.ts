// @ts-nocheck
import Joi from 'joi';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema';
import { ResponseCreateWithoutUserInputSchemaObject } from './ResponseCreateWithoutUserInput.schema';
import { ResponseUncheckedCreateWithoutUserInputSchemaObject } from './ResponseUncheckedCreateWithoutUserInput.schema'

export const ResponseCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutUserInputSchemaObject),
Joi.object().keys(ResponseUncheckedCreateWithoutUserInputSchemaObject))
}