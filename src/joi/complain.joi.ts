import Joi from "joi";

export const ComplainInputSchema = Joi.object({
  role: Joi.string().valid("Dean", "HOD", "Student_Affairs").required(),
  faculty: Joi.string().valid(
    "Science",
    "Education",
    "Information",
    "Law",
    "Management"
  ),
  department: Joi.string().valid(
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
  ),
  subject: Joi.string().min(3).required(),
  complain: Joi.string().min(5).required(),
});

export const MakeComplainSchema = Joi.object({
  subject: Joi.string().min(3).required(),
  body: Joi.string().min(5).required(),
  reportedToUserId: Joi.string().guid({ version: "uuidv4" }).required(),
});

export const UpdateComplainSchema = MakeComplainSchema.keys({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
});

export const QuerySchema = Joi.object({
  currentPage: Joi.number(),
  perPage: Joi.number(),
});

export const RoleQuerySchema = QuerySchema.keys({
  role: Joi.string()
    .valid("Dean", "HOD", "Student", "Student_Affairs", "Admin")
    .required(),
});

export const ParamSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
});

export const RepliedSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  body: Joi.string().min(3).required(),
});
