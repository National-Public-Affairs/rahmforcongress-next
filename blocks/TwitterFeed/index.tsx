import React from 'react';
import Script from 'next/script';
import type { TwitterFeedBlockType } from '@/types/blocks';
import GridContainer from '@/components/layout/GridContainer';
import { Grid, Cell } from '@faceless-ui/css-grid';
import classes from './styles.module.scss';
import { colors } from '@/styles/styles';

type Props = TwitterFeedBlockType;

const TwitterFeedBlock: React.FC<Props> = ({
  id,
  backgroundColor,
  richText,
}) => (
  <div
    className={classes.wrapper}
    style={{ backgroundColor: colors[backgroundColor] }}
  >
    <GridContainer>
      <Grid>
        <Cell
          colsXL={6}
          startXL={4}
          colsL={8}
          startL={3}
          colsM={6}
          startM={2}
          colsS={8}
          startS={1}
        >
          <a className="twitter-timeline" href="https://twitter.com/TaylerRahm2024?ref_src=twsrc%5Etfw">Tweets by TaylerRahm2024</a>
          <Script src="https://platform.twitter.com/widgets.js" />
        </Cell>
      </Grid>
    </GridContainer>
  </div>
);

export default TwitterFeedBlock;
