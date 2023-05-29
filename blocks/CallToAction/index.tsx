import React from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import color from 'color';
import { CtaBlockType } from '@/types/blocks';
import RichText from '@/components/RichText';
import GridContainer from '@/components/layout/GridContainer';
import PolygonTwo from '@/components/graphics/Polygons/PolygonTwo';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';

type Props = CtaBlockType;

const CtaBlock: React.FC<Props> = ({
  styleType,
  ctaBackgroundColor,
  richText,
}) => (
  <div
    style={{ backgroundColor: colors[ctaBackgroundColor] }}
    className={classes.wrapper}
  >
    <GridContainer className={classes.cta}>
      <Grid>
        <Cell
          cols={5}
          start={3}
        >
          <RichText content={richText} />
        </Cell>
      </Grid>
    </GridContainer>
    {
      styleType === 'bold' && (
        <PolygonTwo
          fillColor={color(colors.yellow).darken(0.1).toString()}
          className={classes.polygon}
        />
      )
    }
  </div>
);

export default CtaBlock;
