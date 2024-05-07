// @ts-nocheck
import Joi from 'joi';
import { ResponseCreateWithoutUserInputSchemaObject } from './ResponseCreateWithoutUserInput.schema';
import { ResponseUncheckedCreateWithoutUserInputSchemaObject } from './ResponseUncheckedCreateWithoutUserInput.schema';
import { ResponseCreateOrConnectWithoutUserInputSchemaObject } from './ResponseCreateOrConnectWithoutUserInput.schema';
import { ResponseUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './ResponseUpsertWithWhereUniqueWithoutUserInput.schema';
import { ResponseCreateManyUserInputEnvelopeSchemaObject } from './ResponseCreateManyUserInputEnvelope.schema';
import { ResponseWhereUniqueInputSchemaObject } from './ResponseWhereUniqueInput.schema';
import { ResponseUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './ResponseUpdateWithWhereUniqueWithoutUserInput.schema';
import { ResponseUpdateManyWithWhereWithoutUserInputSchemaObject } from './ResponseUpdateManyWithWhereWithoutUserInput.schema';
import { ResponseScalarWhereInputSchemaObject } from './ResponseScalarWhereInput.schema'

export const ResponseUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ResponseCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseCreateWithoutUserInputSchemaObject)),
Joi.object().keys(ResponseUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(ResponseCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(ResponseUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(ResponseCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(ResponseWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(ResponseUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(ResponseUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(ResponseScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(ResponseScalarWhereInputSchemaObject)))
}