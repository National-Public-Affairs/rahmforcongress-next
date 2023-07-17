/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
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
            >
              <img
                key={idx}
                src={media.url}
                alt={media.alt ? media.alt : 'Rahm for Congress'}
                style={{ maxWidth: gridContainerWidth }}
                className={classes.image}
              />
            </div>
          ))
        }
      />
    );
  }

  return <div />;
};

export default MediaSliderBlock;
