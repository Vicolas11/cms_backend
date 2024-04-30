import Joi from 'joi';
import { OTPUpdateManyMutationInputSchemaObject, OTPWhereInputSchemaObject } from './objects'

export const OTPUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(OTPUpdateManyMutationInputSchemaObject), where: Joi.object().keys(OTPWhereInputSchemaObject)  }).required()