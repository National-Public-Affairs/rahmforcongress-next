import React from 'react';
import Media from '@/components/Media';
import SliderOnBackground from '@/components/Slider/OnBackground';
import { useGridContainerWidth } from '@/components/layout/GridContainer';
import type { MediaSliderBlockType } from '@/types/blocks';
import classes from './styles.module.scss';

type Props = MediaSliderBlockType;

const MediaSliderBlock: React.FC<Props> = ({ backgroundColor, slides }) => {
  const gridContainerWidth = useGridContainerWidth();

  if (slides) {
    return (
      <SliderOnBackground
        backgroundColor={backgroundColor}
        slides={
          slides?.map(({ media }, idx) => (
            <div
              key={idx}
              className={classes.slide}
              style={{ maxWidth: gridContainerWidth }}
            >
              <Media
                className={classes.image}
                url={media.url}
                alt={media.alt}
                mimeType={media.mimeType}
              />
            </div>
          ))
        }
      />
    );
  }

  return (
    <div>

    </div>
  );
};

export default MediaSliderBlock;
