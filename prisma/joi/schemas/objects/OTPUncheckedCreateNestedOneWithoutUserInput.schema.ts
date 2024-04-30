// @ts-nocheck
import Joi from 'joi';
import { OTPCreateWithoutUserInputSchemaObject } from './OTPCreateWithoutUserInput.schema';
import { OTPUncheckedCreateWithoutUserInputSchemaObject } from './OTPUncheckedCreateWithoutUserInput.schema';
import { OTPCreateOrConnectWithoutUserInputSchemaObject } from './OTPCreateOrConnectWithoutUserInput.schema';
import { OTPWhereUniqueInputSchemaObject } from './OTPWhereUniqueInput.schema'

export const OTPUncheckedCreateNestedOneWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(OTPCreateWithoutUserInputSchemaObject),
Joi.object().keys(OTPUncheckedCreateWithoutUserInputSchemaObject)),
  connectOrCreate: Joi.object().keys(OTPCreateOrConnectWithoutUserInputSchemaObject),
  connect: Joi.object().keys(OTPWhereUniqueInputSchemaObject)
}