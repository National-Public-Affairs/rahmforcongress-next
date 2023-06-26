import type { FormFieldBlock } from './types';

export const buildInitialFormState = (fields: FormFieldBlock[]) => {
  return fields.reduce((initialSchema: any, field) => {
    if (field.blockType === 'checkbox' && field.name) {
      return {
        ...initialSchema,
        [field.name]: false,
      }
    }
    if (field.blockType === 'country' && field.name) {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'email' && field.name) {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'text' && field.name) {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'select' && field.name) {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'state' && field.name) {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
  }, {})
};
