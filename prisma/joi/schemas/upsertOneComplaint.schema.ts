import Joi from 'joi';
import { ComplaintWhereUniqueInputSchemaObject, ComplaintCreateInputSchemaObject, ComplaintUpdateInputSchemaObject } from './objects'

export const ComplaintUpsertSchema = Joi.object().keys({ where: Joi.object().keys(ComplaintWhereUniqueInputSchemaObject), data: Joi.object().keys(ComplaintCreateInputSchemaObject), update: Joi.object().keys(ComplaintUpdateInputSchemaObject)  }).required()