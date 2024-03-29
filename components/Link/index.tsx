/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import type { LinkType } from '@/types/fields';
import type { Color } from '@/styles/styles';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';

type Props = {
  className?: string;
  textColor?: typeof colors[Color];
} & LinkType;

const CMSLink: React.FC<Props> = ({
  className,
  newTab,
  reference,
  type,
  label,
  url,
  textColor,
}) => {
  if (type === 'reference') {
    return (
      <Link
        legacyBehavior
        href={`/${reference?.value.slug}`}
        scroll={false}
        target={newTab ? '_blank' : '_self'}
      >
        <a
          className={[classes.link, className].filter(Boolean).join(' ')}
          style={{ color: textColor ?  textColor : 'white' }}
        >
          {label}
        </a>
      </Link>
    );
  }

  return (
    <a
      href={url}
      className={[classes.link, className].filter(Boolean).join(' ')}
      style={{ color: textColor ? textColor : 'white' }}
    >
      {label}
    </a>
  );
};

export default CMSLink;
