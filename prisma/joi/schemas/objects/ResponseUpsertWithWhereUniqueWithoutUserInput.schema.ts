// @ts-nocheck
import Joi from 'joi';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema';
import { ResponseUpdateWithoutUserInputSchemaObject } from './ResponseUpdateWithoutUserInput.schema';
import { ResponseUncheckedUpdateWithoutUserInputSchemaObject } from './ResponseUncheckedUpdateWithoutUserInput.schema';
import { ResponseCreateWithoutUserInputSchemaObject } from './ResponseCreateWithoutUserInput.schema';
import { ResponseUncheckedCreateWithoutUserInputSchemaObject } from './ResponseUncheckedCreateWithoutUserInput.schema'

export const ResponseUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ResponseUpdateWithoutUserInputSchemaObject),
Joi.object().keys(ResponseUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutUserInputSchemaObject),
Joi.object().keys(ResponseUncheckedCreateWithoutUserInputSchemaObject))
}