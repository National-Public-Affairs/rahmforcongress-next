/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import type { LinkType } from '@/types/fields';
import classes from './styles.module.scss';

type Props = {
  className?: string;
} & LinkType;

const CMSLink: React.FC<Props> = ({
  className,
  newTab,
  reference,
  type,
  label,
  url,
}) => {
  if (type === 'reference') {
    return (
      <Link
        legacyBehavior
        href={`/${reference?.value.slug}`}
        scroll={false}
        target={newTab ? '_blank' : '_self'}
      >
        <a className={[classes.link, className].filter(Boolean).join(' ')}>
          {label}
        </a>
      </Link>
    );
  }

  return (
    <a
      href={url}
      className={[classes.link, className].filter(Boolean).join(' ')}
    >
      {label}
    </a>
  );
};

export default CMSLink;
