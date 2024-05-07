import Joi from 'joi';
import { ResponseWhereInputSchemaObject, ResponseOrderByWithRelationInputSchemaObject, ResponseWhereUniqueInputSchemaObject } from './objects';
import { ResponseScalarFieldEnumSchema } from './enums'

export const ResponseFindManySchema = Joi.object().keys({ where: Joi.object().keys(ResponseWhereInputSchemaObject), orderBy: Joi.object().keys(ResponseOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ResponseWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(ResponseScalarFieldEnumSchema)  }).required()