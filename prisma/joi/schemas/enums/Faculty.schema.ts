import Joi from 'joi';

export const FacultySchema = Joi.string().valid(...["Science","Education","Information","Law","Management"])