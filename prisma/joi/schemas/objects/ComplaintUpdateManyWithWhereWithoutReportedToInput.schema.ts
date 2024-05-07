// @ts-nocheck
import Joi from 'joi';
import { ComplaintScalarWhereInputSchemaObject } from './ComplaintScalarWhereInput.schema';
import { ComplaintUpdateManyMutationInputSchemaObject } from './ComplaintUpdateManyMutationInput.schema';
import { ComplaintUncheckedUpdateManyWithoutReportedToInputSchemaObject } from './ComplaintUncheckedUpdateManyWithoutReportedToInput.schema'

export const ComplaintUpdateManyWithWhereWithoutReportedToInputSchemaObject = {
    where: Joi.object().keys(ComplaintScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(ComplaintUpdateManyMutationInputSchemaObject),
Joi.object().keys(ComplaintUncheckedUpdateManyWithoutReportedToInputSchemaObject))
}