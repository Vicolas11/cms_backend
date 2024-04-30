// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenCreateWithoutUserInputSchemaObject } from './BlacklistedTokenCreateWithoutUserInput.schema';
import { BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject } from './BlacklistedTokenUncheckedCreateWithoutUserInput.schema';
import { BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject } from './BlacklistedTokenCreateOrConnectWithoutUserInput.schema';
import { BlacklistedTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './BlacklistedTokenUpsertWithWhereUniqueWithoutUserInput.schema';
import { BlacklistedTokenCreateManyUserInputEnvelopeSchemaObject } from './BlacklistedTokenCreateManyUserInputEnvelope.schema';
import { BlacklistedTokenWhereUniqueInputSchemaObject } from './BlacklistedTokenWhereUniqueInput.schema';
import { BlacklistedTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './BlacklistedTokenUpdateWithWhereUniqueWithoutUserInput.schema';
import { BlacklistedTokenUpdateManyWithWhereWithoutUserInputSchemaObject } from './BlacklistedTokenUpdateManyWithWhereWithoutUserInput.schema';
import { BlacklistedTokenScalarWhereInputSchemaObject } from './BlacklistedTokenScalarWhereInput.schema'

export const BlacklistedTokenUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenCreateWithoutUserInputSchemaObject)),
Joi.object().keys(BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(BlacklistedTokenCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(BlacklistedTokenScalarWhereInputSchemaObject)))
}