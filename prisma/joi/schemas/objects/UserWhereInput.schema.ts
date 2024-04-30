// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { EnumRoleFilterSchemaObject } from './EnumRoleFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { EnumGenderFilterSchemaObject } from './EnumGenderFilter.schema';
import { EnumFacultyNullableFilterSchemaObject } from './EnumFacultyNullableFilter.schema';
import { EnumDepartmentNullableFilterSchemaObject } from './EnumDepartmentNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BlacklistedTokenListRelationFilterSchemaObject } from './BlacklistedTokenListRelationFilter.schema';
import { AuditTrailListRelationFilterSchemaObject } from './AuditTrailListRelationFilter.schema';
import { OTPRelationFilterSchemaObject } from './OTPRelationFilter.schema';
import { OTPWhereInputSchemaObject } from './OTPWhereInput.schema';
import { ComplaintListRelationFilterSchemaObject } from './ComplaintListRelationFilter.schema';
import { ComplaintRelationFilterSchemaObject } from './ComplaintRelationFilter.schema';
import { ComplaintWhereInputSchemaObject } from './ComplaintWhereInput.schema'

export const UserWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFilterSchemaObject)),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  matricNum: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  avatar: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderFilterSchemaObject)),
  faculty: Joi.alternatives().try(Joi.object().keys(EnumFacultyNullableFilterSchemaObject)),
  department: Joi.alternatives().try(Joi.object().keys(EnumDepartmentNullableFilterSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  tokens: Joi.object().keys(BlacklistedTokenListRelationFilterSchemaObject),
  auditTrail: Joi.object().keys(AuditTrailListRelationFilterSchemaObject),
  otp: Joi.alternatives().try(Joi.object().keys(OTPRelationFilterSchemaObject),
Joi.object().keys(OTPWhereInputSchemaObject)),
  complaints: Joi.object().keys(ComplaintListRelationFilterSchemaObject),
  reportedTo: Joi.alternatives().try(Joi.object().keys(ComplaintRelationFilterSchemaObject),
Joi.object().keys(ComplaintWhereInputSchemaObject))
}