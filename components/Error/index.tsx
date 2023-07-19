import React from 'react';
import classes from './styles.module.scss';
import styles from '../../styles/app.module.scss';

type Props = {
  status?: number;
  message: string;
}

const Error: React.FC<Props> = ({
  status,
  message,
}) => (
  <div className={classes.wrapper}>
    <div>
      {
        status
          ? <h1 className={styles.h1}>{status}</h1>
          : null
      }

      <h4 className={styles.h4} style={{ color: 'white' }}>{message}</h4>
    </div>
  </div>
);

export default Error;
