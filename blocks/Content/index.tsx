import React from 'react';
import GridContainer from '@/components/layout/GridContainer';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { ContentBlockType } from '@/types/blocks';
import RichText from '@/components/RichText';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';

type Props = ContentBlockType;

const ContentBlock: React.FC<Props> = ({
  backgroundColor,
  richText,
}) => (

  <div
    className={classes.wrapper}
    style={{
      backgroundColor: backgroundColor?  colors[backgroundColor] : 'transparent'
    }}
  >
    <GridContainer>
      <Grid>
        <Cell
          colsXL={4}
          startXL={5}
          colsL={8}
          startL={3}
          colsM={6}
          startM={2}
          colsS={8}
          startS={1}
        >
          <RichText content={richText} />
        </Cell>
      </Grid>
    </GridContainer>
  </div>

);

export default ContentBlock;
