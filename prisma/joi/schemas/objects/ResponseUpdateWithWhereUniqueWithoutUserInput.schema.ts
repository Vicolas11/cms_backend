// @ts-nocheck
import Joi from 'joi';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema';
import { ResponseUpdateWithoutUserInputSchemaObject } from './ResponseUpdateWithoutUserInput.schema';
import { ResponseUncheckedUpdateWithoutUserInputSchemaObject } from './ResponseUncheckedUpdateWithoutUserInput.schema'

export const ResponseUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(ResponseUpdateWithoutUserInputSchemaObject),
Joi.object().keys(ResponseUncheckedUpdateWithoutUserInputSchemaObject))
}