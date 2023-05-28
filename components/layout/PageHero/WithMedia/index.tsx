import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import type { MediaType } from '@/types/fields';
// import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import Media from '@/components/Media';
import RichText from '@/components/RichText';
import { joinClassNames } from '@/styles/joinClassNames';
import classes from './styles.module.scss';

type Props = {
  content?: unknown;
  foregroundMedia: MediaType | undefined;
  backgroundMedia: MediaType | undefined;
}

const HeroWithMedia: React.FC<Props> = ({
  content,
  foregroundMedia,
  backgroundMedia,
}) => {
  return (
    <div className={classes.wrap}>
      <GridContainer className={classes.gridContainer}>
        <Grid>
          <Cell
            cols={4}
            start={2}
            colsL={4}
            startL={2}
            colsM={4}
            startM={1}
            colsS={4}
            startS={3}
            className={`${classes.gridElement} ${classes.foregroundMedia}`}
          >
            {
              foregroundMedia?.url && foregroundMedia?.mimeType && (
                <Media
                  id={foregroundMedia?.id}
                  alt={foregroundMedia?.alt}
                  mimeType={foregroundMedia?.mimeType}
                  url={foregroundMedia?.url}
                />
              )
            }
            <div className={classes.bg} />
          </Cell>
          <Cell
            cols={5}
            start={6}
            colsL={6}
            startL={6}
            colsM={8}
            startM={5}
            colsS={8}
            startS={1}
            className={`${classes.gridElement} ${classes.cta}`}
          >
            <RichText
              className={joinClassNames([classes.afterLoad, classes.richText])}
              content={content}
            />
          </Cell>
        </Grid>
      </GridContainer>
      {
        backgroundMedia?.url && backgroundMedia?.mimeType && (
          <Media
            id={backgroundMedia?.id}
            alt={backgroundMedia?.alt}
            mimeType={backgroundMedia.mimeType}
            url={backgroundMedia.url}
            className={classes.backgroundMedia}
            clipMask="one"
          />
        )
      }
    </div>
  );
};

export default HeroWithMedia;
