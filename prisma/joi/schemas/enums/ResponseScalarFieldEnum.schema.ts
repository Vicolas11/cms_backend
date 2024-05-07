import Joi from 'joi';

export const ResponseScalarFieldEnumSchema = Joi.string().valid(...["id","body","createdAt","complaintId","userId"])