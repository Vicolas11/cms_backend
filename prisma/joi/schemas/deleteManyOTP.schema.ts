import Joi from 'joi';
import { OTPWhereInputSchemaObject } from './objects'

export const OTPDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(OTPWhereInputSchemaObject)  }).required()