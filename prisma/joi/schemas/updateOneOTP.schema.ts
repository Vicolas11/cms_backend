import Joi from 'joi';
import { OTPUpdateInputSchemaObject, OTPWhereUniqueInputSchemaObject } from './objects'

export const OTPUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(OTPUpdateInputSchemaObject), where: Joi.object().keys(OTPWhereUniqueInputSchemaObject)  }).required()