// @ts-nocheck
import Joi from 'joi';


export const ResponseUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  body: Joi.string().required(),
  createdAt: Joi.date(),
  complaintId: Joi.string().required()
}