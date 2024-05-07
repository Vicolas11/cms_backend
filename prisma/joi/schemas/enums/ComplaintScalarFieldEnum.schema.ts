import Joi from 'joi';

export const ComplaintScalarFieldEnumSchema = Joi.string().valid(...["id","subject","body","reportedToUserId","complainerUserId","hasReplied","hasOpened","createdAt","responseId"])