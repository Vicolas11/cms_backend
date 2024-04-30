import Joi from 'joi';
import { OTPWhereInputSchemaObject, OTPOrderByWithAggregationInputSchemaObject, OTPScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { OTPScalarFieldEnumSchema } from './enums'

export const OTPGroupBySchema = Joi.object().keys({ where: Joi.object().keys(OTPWhereInputSchemaObject), orderBy: Joi.object().keys(OTPOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(OTPScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(OTPScalarFieldEnumSchema).required()  }).required()