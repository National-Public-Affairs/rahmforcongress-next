import React from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';

type RichTextLink = {
  type: 'link';
  linkType: 'custom' | 'internal';
  url?: string;
  newTab: boolean;
  children: any;
  doc?: {
    value?: {
      slug: string;
    }
  };
}

const styles = {
  margin: 0,
  textDecoration: 'underline',
  cursor: 'pointer',
};

const RichTextLink: React.FC<RichTextLink> = ({
  linkType,
  url,
  newTab,
  children,
  doc,
}) => {
  if (linkType === 'internal') {
    return (
      <Link
        legacyBehavior
        href={`/${doc?.value?.slug}`}
        scroll={false}
        target={newTab ? '_blank' : '_self'}
      >
        <a className={classes.link}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a href={url} className={classes.link}>
      {children}
    </a>
  );
};

export default RichTextLink;
