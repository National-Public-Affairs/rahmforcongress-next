import React from 'react';
import classes from './styles.module.scss';
import styles from '../../styles/app.module.scss';

const NotFound: React.FC = () => (
  <div className={classes.wrapper}>
    <div>
      <h1 className={styles.h1}>404</h1>
      <h4 className={styles.h4} style={{ color: 'white' }}>Page not found</h4>
    </div>
  </div>
);

export default NotFound;
