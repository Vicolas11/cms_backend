import Joi from 'joi';

export const BlacklistedTokenScalarFieldEnumSchema = Joi.string().valid(...["id","userId","token","createdAt"])