import Joi from 'joi';
import { ComplaintWhereInputSchemaObject, ComplaintOrderByWithRelationInputSchemaObject, ComplaintWhereUniqueInputSchemaObject } from './objects'

export const ComplaintAggregateSchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereInputSchemaObject), orderBy: Joi.object().keys(ComplaintOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()