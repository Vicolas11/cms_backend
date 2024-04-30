import Joi from 'joi';

export const AuditTrailScalarFieldEnumSchema = Joi.string().valid(...["id","actorId","action","message","status","ipAddress","userAgent","timestramp"])