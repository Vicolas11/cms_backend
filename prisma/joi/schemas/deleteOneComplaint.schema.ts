import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './objects'

export const ComplaintDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject)  }).required()