// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenWhereUniqueInputSchemaObject } from './BlacklistedTokenWhereUniqueInput.schema';
import { BlacklistedTokenUpdateWithoutUserInputSchemaObject } from './BlacklistedTokenUpdateWithoutUserInput.schema';
import { BlacklistedTokenUncheckedUpdateWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedUpdateWithoutUserInput.schema';
import { BlacklistedTokenCreateWithoutUserInputSchemaObject } from './BlacklistedTokenCreateWithoutUserInput.schema';
import { BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateWithoutUserInput.schema'

export const BlacklistedTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenUpdateWithoutUserInputSchemaObject),
Joi.object().keys(BlacklistedTokenUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateWithoutUserInputSchemaObject),
Joi.object().keys(BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject))
}