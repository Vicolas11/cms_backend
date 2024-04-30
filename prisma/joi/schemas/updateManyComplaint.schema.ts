import Joi from 'joi';
import { ComplaintUpdateManyMutationInputSchemaObject, ComplaintWhereInputSchemaObject } from './objects'

export const ComplaintUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(ComplaintUpdateManyMutationInputSchemaObject), where: Joi.object().keys(ComplaintWhereInputSchemaObject)  }).required()