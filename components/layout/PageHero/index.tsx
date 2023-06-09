import React from 'react';
import type { HeroType } from '@/types/fields';
import HeroWithMedia from './WithMedia';
import MinimalPageHero from './Minimal';
import { ShowAfterFirstRender } from '@/components/ShowAfterFirstRender';
import classes from './styles.module.scss';

const Hero: React.FC<HeroType> = ({
  type,
  foregroundMedia,
  backgroundMedia,
  richText,
}) => {
  if (type === 'withMedia') {
    return (
      <ShowAfterFirstRender>
        <div className={classes.text}>
          <HeroWithMedia
            content={richText}
            foregroundMedia={foregroundMedia}
            backgroundMedia={backgroundMedia}
          />
        </div>
      </ShowAfterFirstRender>
    );
  }

  return (
    <ShowAfterFirstRender>
      <MinimalPageHero
        content={richText}
      />
    </ShowAfterFirstRender>
  );
};

export default Hero;
