// @ts-nocheck
import Joi from 'joi';


export const BlacklistedTokenCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required(),
  createdAt: Joi.date()
}