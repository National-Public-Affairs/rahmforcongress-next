import * as React from 'react';
import classes from './styles.module.scss';

export const Width: React.FC<{
  width?: string
  children: React.ReactNode
}> = ({ width, children }) => {
  return (
    <div
      className={classes.width}
      style={{ width: width ? `${width}%` : undefined }}
    >
      {children}
    </div>
  )
}