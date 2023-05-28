import React from 'react';
import classes from './styles.module.scss';

type Props = {
  active: boolean;
}

const Hamburger: React.FC<Props> = ({ active }) => {
  return (
    <svg
      className={classes.hamburger}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 24"
      width="30"
      height="30"
    >
      <line
        className={`${classes.line1} ${active ? classes.active : ''}`}
        x2="30"
      />
      <line
        className={`${classes.line2} ${active ? classes.active : ''}`}
        y1="12"
        x2="30"
        y2="12"
      />
      <line
        className={`${classes.line3} ${active ? classes.active : ''}`}
        y1="12"
        x2="30"
        y2="12"
      />
      <line
        className={`${classes.line4} ${active ? classes.active : ''}`}
        y1="24"
        x2="30"
        y2="24"
      />
    </svg>
  );
};

export default Hamburger;
