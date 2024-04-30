import Joi from 'joi';

export const OTPScalarFieldEnumSchema = Joi.string().valid(...["id","otp","userId","otpExpiration"])