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
          cols={8}
          start={3}
        >
          <RichText content={richText} />
        </Cell>
      </Grid>
    </GridContainer>
  </div>

);

export default ContentBlock;
