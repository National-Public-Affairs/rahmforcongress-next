/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { MediaType } from '@/types/fields';
import masks from '../graphics/Polygons/masks';
import classes from './styles.module.scss';

type Props = MediaType & {
  className?: string;
  clipMask?: 'one' | 'two';
}

const Media: React.FC<Props> = ({
  className,
  mimeType,
  alt,
  clipMask,
  url,
}) => {
  let altData = 'Rahm for Congress';
  if (alt) {
    altData = alt;
  }
  if (mimeType.includes('video')) {
    return (
      <div className={className}>
        <video
          autoPlay
          muted
          loop
          controls={false}
          className={classes.media}
        >
          <source src={url} />
        </video>
      </div>
    );
  }

  if (clipMask === 'one') {
    return (
      <div className={className}>
        <img
          className={classes.media}
          src={url}
          alt={altData}
          width={500}
          style={{
            clipPath: masks.maskOne,
          }}
        />
      </div>
    );
  }

  if (clipMask === 'two') {
    return (
      <div className={className}>
        <img
          className={classes.media}
          src={url}
          alt={altData}
          style={{
            clipPath: masks.maskTwo,
          }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        className={classes.media}
        src={url}
        width={500}
        alt={altData}
      />
    </div>
  );
};

export default Media;
