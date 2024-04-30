// @ts-nocheck
import Joi from 'joi';


export const OTPUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  otp: Joi.string().required(),
  userId: Joi.string().required(),
  otpExpiration: Joi.date().required()
}