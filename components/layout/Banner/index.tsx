import React from 'react';
import type { BannerType } from '@/types/fields';
import CMSLink from '@/components/Link';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';

type Props = BannerType;

const Banner: React.FC<Props> = ({
  newTab,
  link,
  bannerBackgroundColor,
  textColor,
}) => {
  
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundColor: colors[bannerBackgroundColor],
        color: colors[textColor],
      }}
    >
      <CMSLink
        key={link.url}
        type={link.type}
        reference={link.reference}
        label={link.label}
        url={link.url}
        className={classes.link}
        newTab={newTab}
      />
    </div>
  )
};

export default Banner;
