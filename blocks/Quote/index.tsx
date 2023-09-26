import React from 'react';

import type { QuoteBlockType } from '@/types/blocks';

import { gradients } from '@/styles/styles';

import Media from '@/components/Media';
import RichText from '@/components/RichText';

import classes from './styles.module.scss';

type Props = QuoteBlockType;

const QuoteBlock: React.FC<Props> = ({
  backgroundColor,
  richText,
  quoteMedia,
}) => {
  return (
    <div
      className={classes.wrapper}
      style={{
        background: backgroundColor ? gradients[backgroundColor] : 'transparent',
      }}
    >
      <RichText content={richText} className={classes.content} />
        {
          quoteMedia && quoteMedia.length > 0
            ? (
              <div className={classes.mediaWrapper}>
                {
                  quoteMedia.map((medium) => {
                    return (
                      <div key={medium.id}>
                        <Media
                          mimeType={medium.quoteMedium.mimeType}
                          url={medium.quoteMedium.url}
                        />
                      </div>
                    )
                  })
                }
              </div>
            )
            : null
        }
    </div>
  );
};

export default QuoteBlock;
