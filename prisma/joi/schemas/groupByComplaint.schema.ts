import Joi from 'joi';
import { ComplaintWhereInputSchemaObject, ComplaintOrderByWithAggregationInputSchemaObject, ComplaintScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { ComplaintScalarFieldEnumSchema } from './enums'

export const ComplaintGroupBySchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereInputSchemaObject), orderBy: Joi.object().keys(ComplaintOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(ComplaintScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(ComplaintScalarFieldEnumSchema).required()  }).required()