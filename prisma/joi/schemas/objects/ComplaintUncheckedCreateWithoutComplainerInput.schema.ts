// @ts-nocheck
import Joi from 'joi';


export const ComplaintUncheckedCreateWithoutComplainerInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  complain: Joi.string().required(),
  reportedToUserId: Joi.string().required(),
  hasReplied: Joi.boolean(),
  createdAt: Joi.date()
}