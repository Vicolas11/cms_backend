// @ts-nocheck
import Joi from 'joi';


export const AuditTrailCreateManyInputSchemaObject = {
    id: Joi.string(),
  actorId: Joi.alternatives().try(Joi.string()),
  action: Joi.string().required(),
  message: Joi.string().required(),
  status: Joi.number(),
  ipAddress: Joi.string().required(),
  userAgent: Joi.string().required(),
  timestramp: Joi.date()
}