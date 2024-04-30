// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutOtpInputSchemaObject } from './UserCreateNestedOneWithoutOtpInput.schema'

export const OTPCreateInputSchemaObject = {
    id: Joi.string(),
  otp: Joi.string().required(),
  otpExpiration: Joi.date().required(),
  user: Joi.object().keys(UserCreateNestedOneWithoutOtpInputSchemaObject)
}