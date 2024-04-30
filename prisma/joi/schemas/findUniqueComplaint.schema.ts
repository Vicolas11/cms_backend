import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject } from './objects'

export const ComplaintFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject) }).required()