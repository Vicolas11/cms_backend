import Joi from 'joi';

export const DepartmentSchema = Joi.string().valid(...["Accounting","Biochemistry","Botany","Business","ComputerSci","ComputerEdu","Criminology","Economics","English","Information","International","Law","Microbiology","Public"])