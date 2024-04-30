// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenWhereUniqueInputSchemaObject } from './BlacklistedTokenWhereUniqueInput.schema';
import { BlacklistedTokenUpdateWithoutUserInputSchemaObject } from './BlacklistedTokenUpdateWithoutUserInput.schema';
import { BlacklistedTokenUncheckedUpdateWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedUpdateWithoutUserInput.schema'

export const BlacklistedTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenUpdateWithoutUserInputSchemaObject),
Joi.object().keys(BlacklistedTokenUncheckedUpdateWithoutUserInputSchemaObject))
}