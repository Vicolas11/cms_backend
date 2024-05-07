import Joi from "joi";

export const PasswordInputSchema = Joi.object({
  password: Joi.string().required(),
  confirm_password: Joi.string().required(),
});

export const EmailInputSchema = Joi.object({
  email: Joi.string().min(3).email().required(),
});

export const ResetPwdInputSchema = Joi.object({
  email: Joi.string().min(3).email().required(),
  password: Joi.string().min(6).required(),
  otp: Joi.string().length(6).required(),
});

export const ChangeInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  newpassword: Joi.string().min(6).required(),
  oldpassword: Joi.string().required(),
});
