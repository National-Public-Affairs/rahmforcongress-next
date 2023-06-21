import type { FormFieldBlock } from './types';

export const buildInitialFormState = (fields: FormFieldBlock[]) => {
  return fields.reduce((initialSchema: any, field) => {
    if (field.blockType === 'checkbox' && field.blockName) {
      return {
        ...initialSchema,
        [field.blockName]: false,
      }
    }
    if (field.blockType === 'country' && field.blockName) {
      return {
        ...initialSchema,
        [field.blockName]: '',
      }
    }
    if (field.blockType === 'email' && field.blockName) {
      return {
        ...initialSchema,
        [field.blockName]: '',
      }
    }
    if (field.blockType === 'text' && field.blockName) {
      return {
        ...initialSchema,
        [field.blockName]: '',
      }
    }
    if (field.blockType === 'select' && field.blockName) {
      return {
        ...initialSchema,
        [field.blockName]: '',
      }
    }
    if (field.blockType === 'state' && field.blockName) {
      return {
        ...initialSchema,
        [field.blockName]: '',
      }
    }
  }, {})
};
