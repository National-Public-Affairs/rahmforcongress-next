export type Value = unknown;

export interface Property {
  [key: string]: Value;
}

export interface Data {
  [key: string]: Value | Property | Property[];
}

export type TextField = {
  blockType: 'text';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
};
export type TextAreaField = {
  blockType: 'textarea';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
};
export type SelectFieldOption = {
  label: string;
  value: string;
};
export type SelectField = {
  blockType: 'select';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
  options: SelectFieldOption[];
};
export type PriceCondition = {
  fieldToUse: string;
  condition: 'equals' | 'notEquals' | 'hasValue';
  valueForCondition: string;
  operator: 'add' | 'subtract' | 'multiply' | 'divide';
  valueType: 'static' | 'valueOfField';
  valueForOperator: string | number;
};
export type PaymentField = {
  blockType: 'payment';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
  paymentProcessor: string;
  basePrice: number;
  priceConditions: PriceCondition[];
};
export type EmailField = {
  blockType: 'email';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
};
export type StateField = {
  blockType: 'state';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
};
export type CountryField = {
  blockType: 'country';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
};
export type CheckboxField = {
  blockType: 'checkbox';
  blockName?: string;
  width?: string;
  name: string;
  label?: string;
  defaultValue?: boolean;
  required?: boolean;
};
export type MessageField = {
  blockType: 'message';
  blockName?: string;
  message: unknown;
};

export type FormFieldBlock =
  | TextField
  | TextAreaField
  | SelectField
  | EmailField
  | StateField
  | CountryField
  | CheckboxField
  | MessageField
  | PaymentField;

export type Redirect = {
  type: 'reference' | 'custom';
  reference?: {
    relationTo: string;
    value: string | unknown;
  };
  url: string;
};

export type Email = {
  emailTo: string;
  emailFrom: string;
  cc?: string;
  bcc?: string;
  replyTo?: string;
  subject: string;
  message?: any;
};

export type FormType = {
  id: string;
  title: string;
  fields: FormFieldBlock[];
  submitButtonLabel?: string;
  confirmationType: 'message' | 'redirect';
  confirmationMessage?: any;
  redirect?: Redirect;
  emails: Email[];
};

export type FormBlockType = {
  blockName?: string;
  blockType?: 'formBlock';
  enableIntro: boolean;
  form: FormType;
  introContent?: {
    [k: string]: unknown;
  }[];
};
