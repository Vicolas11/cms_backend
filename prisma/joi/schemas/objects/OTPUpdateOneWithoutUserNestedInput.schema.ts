// @ts-nocheck
import Joi from 'joi';
import { OTPCreateWithoutUserInputSchemaObject } from './OTPCreateWithoutUserInput.schema';
import { OTPUncheckedCreateWithoutUserInputSchemaObject } from './OTPUncheckedCreateWithoutUserInput.schema';
import { OTPCreateOrConnectWithoutUserInputSchemaObject } from './OTPCreateOrConnectWithoutUserInput.schema';
import { OTPUpsertWithoutUserInputSchemaObject } from './OTPUpsertWithoutUserInput.schema';
import { OTPWhereUniqueInputSchemaObject } from './OTPWhereUniqueInput.schema';
import { OTPUpdateWithoutUserInputSchemaObject } from './OTPUpdateWithoutUserInput.schema';
import { OTPUncheckedUpdateWithoutUserInputSchemaObject } from './OTPUncheckedUpdateWithoutUserInput.schema'

export const OTPUpdateOneWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(OTPCreateWithoutUserInputSchemaObject),
Joi.object().keys(OTPUncheckedCreateWithoutUserInputSchemaObject)),
  connectOrCreate: Joi.object().keys(OTPCreateOrConnectWithoutUserInputSchemaObject),
  upsert: Joi.object().keys(OTPUpsertWithoutUserInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(OTPWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(OTPUpdateWithoutUserInputSchemaObject),
Joi.object().keys(OTPUncheckedUpdateWithoutUserInputSchemaObject))
}