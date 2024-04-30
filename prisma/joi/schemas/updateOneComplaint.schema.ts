import Joi from 'joi';
import { ComplaintUpdateInputSchemaObject, ComplaintWhereUniqueInputSchemaObject } from './objects'

export const ComplaintUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(ComplaintUpdateInputSchemaObject), where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject)  }).required()