// @ts-nocheck
import Joi from 'joi';


export const ComplaintUncheckedCreateWithoutReportedToInputSchemaObject = {
    id: Joi.string(),
  subject: Joi.string().required(),
  complain: Joi.string().required(),
  complainerUserId: Joi.string().required(),
  hasReplied: Joi.boolean(),
  createdAt: Joi.date()
}