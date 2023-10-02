import React from 'react';

import type { CarouselBlockType } from '@/types/blocks';

import Media from '@/components/Media';

import classes from './styles.module.scss';

type Props = CarouselBlockType;

const CarouselBlock: React.FC<Props> = ({ items }) => {
  console.log('CAROUSEL ITEMS', items)
  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        {
          items && items.map((item) => (
            <div key={item.id} className={classes.mediaWrapper}>
              <Media
                mimeType={item.media.mimeType}
                url={item.media.url}
              />
            </div>
          ))
        }
      </div>

      <div className={classes.contentWrapper}>
        {
          items && items.map((item) => (
            <div key={item.id} className={classes.mediaWrapper}>
              <Media
                mimeType={item.media.mimeType}
                url={item.media.url}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CarouselBlock;
