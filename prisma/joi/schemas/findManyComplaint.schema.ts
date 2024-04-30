import Joi from 'joi';
import { ComplaintWhereInputSchemaObject, ComplaintOrderByWithRelationInputSchemaObject, ComplaintWhereUniqueInputSchemaObject } from './objects';
import { ComplaintScalarFieldEnumSchema } from './enums'

export const ComplaintFindManySchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereInputSchemaObject), orderBy: Joi.object().keys(ComplaintOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(ComplaintScalarFieldEnumSchema)  }).required()