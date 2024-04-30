import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","role","name","email","matricNum","password","avatar","gender","faculty","department","createdAt"])