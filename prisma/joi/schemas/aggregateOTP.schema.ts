import Joi from 'joi';
import { OTPWhereInputSchemaObject, OTPOrderByWithRelationInputSchemaObject, OTPWhereUniqueInputSchemaObject } from './objects'

export const OTPAggregateSchema = Joi.object().keys({ where: Joi.object().keys(OTPWhereInputSchemaObject), orderBy: Joi.object().keys(OTPOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(OTPWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()