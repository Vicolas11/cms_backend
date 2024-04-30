// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateWithoutUserInputSchemaObject } from './BlacklistedTokenCreateWithoutUserInput.schema';
import { BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateWithoutUserInput.schema';
import { BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject } from './BlacklistedTokenCreateOrConnectWithoutUserInput.schema';
import { BlacklistedTokenCreateManyUserInputEnvelopeSchemaObject } from './BlacklistedTokenCreateManyUserInputEnvelope.schema';
import { BlacklistedTokenWhereUniqueInputSchemaObject } from './BlacklistedTokenWhereUniqueInput.schema'

export const BlacklistedTokenCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenCreateWithoutUserInputSchemaObject)),
Joi.object().keys(BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(BlacklistedTokenCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject)))
}