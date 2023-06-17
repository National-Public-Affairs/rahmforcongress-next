import React from 'react';
import type { MessageField } from '../types';
import RichText from '@/components/RichText';
import { Width } from "../Width";

import classes from './index.module.scss';

export const Message: React.FC<MessageField> = ({ message }) => {
  return (
    <Width width="100">
      <RichText
        content={message}
        className={classes.message}
      />
    </Width>
  );
};