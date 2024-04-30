// @ts-nocheck
import Joi from 'joi';


export const OTPUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  otp: Joi.string().required(),
  otpExpiration: Joi.date().required()
}