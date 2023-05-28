import React from 'react';
import Image from 'next/image';
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
        <Image
          className={classes.media}
          src={url}
          alt={alt}
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
        <Image
          className={classes.media}
          src={url}
          alt={alt}
          style={{
            clipPath: masks.maskTwo,
          }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        className={classes.media}
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default Media;
