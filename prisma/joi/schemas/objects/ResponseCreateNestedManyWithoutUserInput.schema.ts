// @ts-nocheck
import Joi from 'joi';
import { ResponseCreateWithoutUserInputSchemaObject } from './ResponseCreateWithoutUserInput.schema';
import { ResponseUncheckedCreateWithoutUserInputSchemaObject } from './ResponseUncheckedCreateWithoutUserInput.schema';
import { ResponseCreateOrConnectWithoutUserInputSchemaObject } from './ResponseCreateOrConnectWithoutUserInput.schema';
import { ResponseCreateManyUserInputEnvelopeSchemaObject } from './ResponseCreateManyUserInputEnvelope.schema';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema'

export const ResponseCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseCreateWithoutUserInputSchemaObject)),
Joi.object().keys(ResponseUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(ResponseCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(ResponseCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseWhereUniqueInputSchemaObject)))
}