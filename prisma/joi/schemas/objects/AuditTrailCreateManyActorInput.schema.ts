// @ts-nocheck
import Joi from 'joi';


export const AuditTrailCreateManyActorInputSchemaObject = {
    id: Joi.string(),
  action: Joi.string().required(),
  message: Joi.string().required(),
  status: Joi.number(),
  ipAddress: Joi.string().required(),
  userAgent: Joi.string().required(),
  timestramp: Joi.date()
}