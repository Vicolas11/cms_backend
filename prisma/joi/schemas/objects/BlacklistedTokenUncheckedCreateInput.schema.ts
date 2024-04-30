// @ts-nocheck
import Joi from 'joi';


export const BlacklistedTokenUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  userId: Joi.string().required(),
  token: Joi.string().required(),
  createdAt: Joi.date()
}