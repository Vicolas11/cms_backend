// @ts-nocheck
import Joi from 'joi';
import { BlacklistedTokenScalarWhereInputSchemaObject } from './BlacklistedTokenScalarWhereInput.schema';
import { BlacklistedTokenUpdateManyMutationInputSchemaObject } from './BlacklistedTokenUpdateManyMutationInput.schema';
import { BlacklistedTokenUncheckedUpdateManyWithoutTokensInputSchemaObject } from './BlacklistedTokenUncheckedUpdateManyWithoutTokensInput.schema'

export const BlacklistedTokenUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BlacklistedTokenScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(BlacklistedTokenUpdateManyMutationInputSchemaObject),
Joi.object().keys(BlacklistedTokenUncheckedUpdateManyWithoutTokensInputSchemaObject))
}