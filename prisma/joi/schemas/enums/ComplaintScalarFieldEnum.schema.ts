import Joi from 'joi';

export const ComplaintScalarFieldEnumSchema = Joi.string().valid(...["id","subject","complain","reportedToUserId","complainerUserId","hasReplied","createdAt"])