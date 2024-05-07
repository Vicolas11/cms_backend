import Joi from "joi";

export const LoginInputSchema = Joi.object({
  role: Joi.string()
    .valid("Dean", "HOD", "Student", "Student_Affairs")
    .required(),
  email: Joi.string().email().when("role", {
    is: "Student",
    then: Joi.string().forbidden(),
    otherwise: Joi.string().email().required(),
  }),
  matricNum: Joi.string()
    .regex(/^(SU|su)(20[0-9][0-9])([0-9]{4})[tT]?$/)
    .when("role", {
      is: "Student",
      then: Joi.string().required(),
      otherwise: Joi.string().forbidden(),
    }),
  password: Joi.string().required(),
});

export const LoginAdminInputSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const HashPwdInputSchema = Joi.object({
  password: Joi.string().min(6).required(),
});
