import Joi from 'joi';

export const RoleSchema = Joi.string().valid(...["Admin","Student","Dean","HOD","Student_Affairs"])