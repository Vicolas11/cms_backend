import Joi from "joi";

export const RegisterInputSchema = Joi.object({
  role: Joi.string()
    .valid("Dean", "HOD", "Student", "Student_Affairs")
    .required(),
  faculty: Joi.string()
    .valid("Science", "Education", "Information", "Law", "Management")
    .when("role", {
      is: "Dean",
      then: Joi.string().required(),
      otherwise: Joi.string().forbidden(),
    }),
  department: Joi.string()
    .valid(
      "Accounting",
      "Biochemistry",
      "Botany",
      "Business",
      "ComputerSci",
      "ComputerEdu",
      "Criminology",
      "Economics",
      "English",
      "Information",
      "International",
      "Law",
      "Microbiology",
      "Public"
    )
    .when("role", {
      is: Joi.valid("Student", "HOD"),
      then: Joi.string().required(),
      otherwise: Joi.string().forbidden(),
    }),
  matricNum: Joi.string()
    .regex(/^(SU|su)(20[0-9][0-9])([0-9]{4})[tT]?$/)
    .when("role", {
      is: "Student",
      then: Joi.string().required(),
      otherwise: Joi.string().forbidden(),
    }),
  name: Joi.string()
    .regex(/^(?!\s)([a-zA-Z]{2,})+(?:\s([a-zA-Z]{2,})+)+$/)
    .required(),
  gender: Joi.string().valid("Male", "Female").required(),
  email: Joi.string().email().min(3).required(),
  password: Joi.string().min(6).required(),
});

export const AccountInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  name: Joi.string()
    .regex(/^(?!\s)([a-zA-Z]{2,})+(?:\s([a-zA-Z]{2,})+)+$/)
    .required(),
});
