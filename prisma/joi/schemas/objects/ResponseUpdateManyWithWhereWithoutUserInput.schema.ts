// @ts-nocheck
import Joi from 'joi';
import { ResponseScalarWhereInputSchemaObject } from './ResponseScalarWhereInput.schema';
import { ResponseUpdateManyMutationInputSchemaObject } from './ResponseUpdateManyMutationInput.schema';
import { ResponseUncheckedUpdateManyWithoutResponseInputSchemaObject } from './ResponseUncheckedUpdateManyWithoutResponseInput.schema'

export const ResponseUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(ResponseScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(ResponseUpdateManyMutationInputSchemaObject),
Joi.object().keys(ResponseUncheckedUpdateManyWithoutResponseInputSchemaObject))
}