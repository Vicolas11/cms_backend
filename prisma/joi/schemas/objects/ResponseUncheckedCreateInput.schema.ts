// @ts-nocheck
import Joi from 'joi';


export const ResponseUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  body: Joi.string().required(),
  createdAt: Joi.date(),
  complaintId: Joi.string().required(),
  userId: Joi.alternatives().try(Joi.string())
}