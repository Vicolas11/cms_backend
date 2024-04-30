// @ts-nocheck
import Joi from 'joi';


export const BlacklistedTokenCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required(),
  createdAt: Joi.date()
}