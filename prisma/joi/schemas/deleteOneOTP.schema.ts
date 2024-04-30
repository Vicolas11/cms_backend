import Joi from 'joi';
import { OTPWhereUniqueInputSchemaObject } from './objects'

export const OTPDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(OTPWhereUniqueInputSchemaObject)  }).required()