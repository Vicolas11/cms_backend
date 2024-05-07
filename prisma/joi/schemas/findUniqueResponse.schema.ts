import Joi from 'joi';
import { ResponseWhereUniqueInputSchemaObject } from './objects'

export const ResponseFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(ResponseWhereUniqueInputSchemaObject) }).required()