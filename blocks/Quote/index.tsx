import React from 'react';

import type { QuoteBlockType } from '@/types/blocks';

import { gradients } from '@/styles/styles';

import GridContainer from '@/components/layout/GridContainer';
import RichText from '@/components/RichText';

import classes from './styles.module.scss';
import { Cell, Grid } from '@faceless-ui/css-grid';

type Props = QuoteBlockType;

const QuoteBlock: React.FC<Props> = ({
  backgroundColor,
  richText,
  backgroundMedia,
}) => {
  return (
    <div
      style={{
        background: backgroundColor ? gradients[backgroundColor] : 'transparent',
      }}
    >
        <GridContainer>
          <Grid>
            <Cell
              cols={8}
              start={3}
              colsM={8}
              startM={1}
              className={classes.wrapper}
            >
              <RichText content={richText} className={classes.content} />
            </Cell>
          </Grid>
        </GridContainer>
    </div>
  );
};

export default QuoteBlock;
