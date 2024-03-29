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
  let altData = 'Rahm for Congress';
  if (alt) {
    altData = alt;
  }
  if (mimeType.includes('video')) {
    return (
      <div className={`${className} ${classes.imgWrapper}`}>
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
      <div className={`${className} ${classes.imgWrapper}`}>
        <Image
          className={`${className} ${classes.image}`}
          src={url}
          alt={altData}
          fill
          sizes="100vw"
          style={{
            clipPath: masks.maskOne,
          }}
        />
      </div>
    );
  }

  if (clipMask === 'two') {
    return (
      <div className={`${className} ${classes.imgWrapper}`}>
        <Image
          className={`${className} ${classes.image}`}
          src={url}
          alt={altData}
          fill
          sizes="100vw"
          style={{
            clipPath: masks.maskTwo,
          }}
        />
      </div>
    );
  }

  if (!clipMask) {
    return (
      <div className={`${className} ${classes.imgWrapper}`}>
        <Image
          className={`${className} ${classes.image}`}
          src={url}
          alt={altData}
          fill
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div className={`${className} ${classes.imgWrapper}`}>
      <Image
        className={`${className} ${classes.image}`}
        src={url}
        alt={altData}
        fill
        sizes="100vw"
      />
    </div>
  );
};

export default Media;
