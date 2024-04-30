import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","role","name","email","matricNum","password","avatar","otp","gender","faculty","department","createdAt"])