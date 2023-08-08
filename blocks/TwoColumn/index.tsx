import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';

import type { TwoColumnBlockType } from '@/types/blocks';

import { colors } from '@/styles/styles';

import GridContainer from '@/components/layout/GridContainer';
import RichText from '@/components/RichText';
import AccentMediaBlock from '../Accent Media';
import CtaBlock from '../CallToAction';

import classes from './styles.module.scss';

type Props = TwoColumnBlockType;

const TwoColumnBlock: React.FC<Props> = ({
  backgroundColor,
  twoColumn,
}) => {
  const renderColumns = twoColumn.map((block) => {
    switch (block.contentType) {
      case 'media':
        return (
          <div key={block.id} className={classes.media}>
            <AccentMediaBlock
              displayBorder={block.displayBorder}
              backgroundColor={block.backgroundColor}
              accentStyle={block.accentStyle}
              accentSize="large"
              accentMedia={block.accentMedia}
            />
          </div>
        );
      case 'richText':
        return (
          <div key={block.id} className={classes.richText}>
            <RichText content={block.richText} />
          </div>
        );
      case 'cta':
        return (
          <div key={block.id} className={classes.cta}>
            <CtaBlock
              styleType={block.type ? block.type : 'bold'}
              ctaBackgroundColor={block.backgroundColor}
              richText={block.richText}
              standalone
            />
          </div>
        );
      default:
        break;
    }
  })

  console.log('TWO COLUMN DATA', twoColumn)
  return (
    <div style={{ backgroundColor: colors[backgroundColor] }}>
      <GridContainer>
        <Grid>
          <Cell
            cols={6}
            start={4}
            colsL={8}
            startL={3}
            colsM={8}
            startM={1}
            className={classes.grid}
          >
            {renderColumns}
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default TwoColumnBlock;
