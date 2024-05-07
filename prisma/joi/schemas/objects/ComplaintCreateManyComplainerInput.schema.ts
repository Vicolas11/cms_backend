// @ts-nocheck
import Joi from 'joi';


export const ComplaintCreateManyComplainerInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  reportedToUserId: Joi.string().required(),
  hasReplied: Joi.boolean(),
  hasOpened: Joi.boolean(),
  createdAt: Joi.date(),
  responseId: Joi.alternatives().try(Joi.string())
}