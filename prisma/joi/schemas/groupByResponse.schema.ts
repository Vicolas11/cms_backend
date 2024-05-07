import Joi from 'joi';
import { ResponseWhereInputSchemaObject, ResponseOrderByWithAggregationInputSchemaObject, ResponseScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { ResponseScalarFieldEnumSchema } from './enums'

export const ResponseGroupBySchema = Joi.object().keys({ where: Joi.object().keys(ResponseWhereInputSchemaObject), orderBy: Joi.object().keys(ResponseOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(ResponseScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(ResponseScalarFieldEnumSchema).required()  }).required()