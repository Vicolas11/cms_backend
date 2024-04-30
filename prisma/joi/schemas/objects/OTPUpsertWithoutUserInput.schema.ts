// @ts-nocheck
import Joi from 'joi';
import { OTPUpdateWithoutUserInputSchemaObject } from './OTPUpdateWithoutUserInput.schema';
import { OTPUncheckedUpdateWithoutUserInputSchemaObject } from './OTPUncheckedUpdateWithoutUserInput.schema';
import { OTPCreateWithoutUserInputSchemaObject } from './OTPCreateWithoutUserInput.schema';
import { OTPUncheckedCreateWithoutUserInputSchemaObject } from './OTPUncheckedCreateWithoutUserInput.schema'

export const OTPUpsertWithoutUserInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(OTPUpdateWithoutUserInputSchemaObject),
Joi.object().keys(OTPUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(OTPCreateWithoutUserInputSchemaObject),
Joi.object().keys(OTPUncheckedCreateWithoutUserInputSchemaObject))
}