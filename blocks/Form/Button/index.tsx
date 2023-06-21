import Link from 'next/link';
import React from 'react';
import classes from './styles.module.scss';
import { colors } from '@/styles/styles';

export type Props = {
  label: string;
  el?: 'button' | 'link' | 'a';
  onClick?: () => void;
  href?: string;
  form?: string;
  newTab?: boolean;
  className?: string;
}

const elements = {
  a: 'a',
  link: Link,
  button: 'button',
}

export const Button: React.FC<Props> = ({
  el = 'button',
  label,
  newTab,
  href,
  form,
  className: classNameFromProps
}) => {
  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  const Element: any = elements[el];
  const className = [classNameFromProps, classes.button].filter(Boolean).join(' ');

  const elementProps = {
    ...newTabProps,
    href,
    className,
    form,
  }

  const content = (
    <div className={classes.content}>
      <span className={classes.label}>
        {label}
      </span>
    </div>
  )

  return (
    <Element {...elementProps} style={{ backgroundColor: colors.darkPurple }}>
      <React.Fragment>
        {el === 'link' && (
          <a {...newTabProps} href={href} className={elementProps.className}>
            {content}
          </a>
        )}
        {el !== 'link' && (
          <React.Fragment>
            {content}
          </React.Fragment>
        )}
      </React.Fragment>
    </Element>
  )
}
