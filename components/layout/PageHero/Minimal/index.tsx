import React from 'react';
import color from 'color';
import RichText from '@/components/RichText';
import GridContainer from '../../GridContainer';
import PolygonTwo from '@/components/graphics/Polygons/PolygonTwo';
import { colors } from '@/styles/styles';
import classes from '../WithMedia/styles.module.scss';

type Props = {
  content: unknown;
}

const MinimalPageHero: React.FC<Props> = ({ content }) => {
  return (
    <div className={classes.minimalWrap}>
      <GridContainer>
        <RichText
          className={classes.richText}
          content={content}
        />
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
