// @ts-nocheck
import Joi from 'joi';
import { OTPWhereUniqueInputSchemaObject } from './OTPWhereUniqueInput.schema';
import { OTPCreateWithoutUserInputSchemaObject } from './OTPCreateWithoutUserInput.schema';
import { OTPUncheckedCreateWithoutUserInputSchemaObject } from './OTPUncheckedCreateWithoutUserInput.schema'

export const OTPCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(OTPWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(OTPCreateWithoutUserInputSchemaObject),
Joi.object().keys(OTPUncheckedCreateWithoutUserInputSchemaObject))
}