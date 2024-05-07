// @ts-nocheck
import Joi from 'joi';


export const ResponseUncheckedCreateWithoutComplaintInputSchemaObject = {
    id: Joi.string(),
  body: Joi.string().required(),
  createdAt: Joi.date(),
  userId: Joi.alternatives().try(Joi.string())
}