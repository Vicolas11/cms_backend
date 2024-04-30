import Joi from 'joi';
import { OTPWhereUniqueInputSchemaObject, OTPCreateInputSchemaObject, OTPUpdateInputSchemaObject } from './objects'

export const OTPUpsertSchema = Joi.object().keys({ where: Joi.object().keys(OTPWhereUniqueInputSchemaObject), data: Joi.object().keys(OTPCreateInputSchemaObject), update: Joi.object().keys(OTPUpdateInputSchemaObject)  }).required()