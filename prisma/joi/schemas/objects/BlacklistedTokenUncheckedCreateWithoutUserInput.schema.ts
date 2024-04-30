// @ts-nocheck
import Joi from 'joi';


export const BlacklistedTokenUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required(),
  createdAt: Joi.date()
}