import React from 'react';
import classes from './styles.module.scss';

type Props = {
  children: any;
}

const Template: React.FC<Props> = ({
  children,
}) => (
  <>
    <div className={classes.wrapper}>
      {children}
    </div>
    {/* footer goes here */}
  </>
);

export default Template;
