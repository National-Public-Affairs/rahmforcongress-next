import * as React from 'react';
import classes from './styles.module.scss';

export const Error: React.FC = () => {
  return (
    <div className={classes.error}>
      This field is required
    </div>
  );
}
