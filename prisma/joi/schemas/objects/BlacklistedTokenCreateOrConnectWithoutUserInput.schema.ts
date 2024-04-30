// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenWhereUniqueInputSchemaObject } from './BlacklistedTokenWhereUniqueInput.schema';
import { BlacklistedTokenCreateWithoutUserInputSchemaObject } from './BlacklistedTokenCreateWithoutUserInput.schema';
import { BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateWithoutUserInput.schema'

export const BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateWithoutUserInputSchemaObject),
Joi.object().keys(BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject))
}