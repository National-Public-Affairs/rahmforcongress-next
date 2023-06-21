import React from 'react';
import type { EmailField } from '../types';
import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';
import { Error } from '../Error';
import { Width } from '../Width';

import classes from './styles.module.scss';

export const Email: React.FC<EmailField & {
  register: UseFormRegister<FieldValues & any>;
  errors: Partial<FieldErrorsImpl<{
    [x: string]: any;
  }>>
}> = ({ name, width, label, register, required: requiredFromProps, errors }) => {
  return (
    <Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor="name" className={classes.label}>
          {label}
        </label>
        <input
          type="text"
          className={classes.input}
          {...register(name, { required: requiredFromProps, pattern: /^\S+@\S+$/i })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    </Width>
  );
};