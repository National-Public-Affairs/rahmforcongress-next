import React from 'react';
import color from 'color';
import RichText from '@/components/RichText';
import GridContainer from '../../GridContainer';
import PolygonTwo from '@/components/graphics/Polygons/PolygonTwo';
import { colors } from '@/styles/styles';
import classes from '../WithMedia/styles.module.scss';
import textStyles from '../../../../styles/app.module.scss';
import { Cell, Grid } from '@faceless-ui/css-grid';

type Props = {
  content: unknown;
}

const MinimalPageHero: React.FC<Props> = ({ content }) => {
  return (
    <div className={classes.minimalWrap}>
      <GridContainer>
        <Grid>
          <Cell
            colsXL={5}
            startXL={5}
            colsL={5}
            startL={4}
            colsM={4}
            startM={2}
            colsS={6}
            startS={1}
          >
            <RichText
              className={`${classes.richText} ${textStyles.h1}`}
              content={content}
            />
          </Cell>
        </Grid>
      </GridContainer>
      <div className={classes.minimalBg}>
        <PolygonTwo
          fillColor={color(colors.yellow).darken(0.1).toString()}
          className={classes.polygon}
        />
      </div>
    </div>
  );
};

export default MinimalPageHero;
