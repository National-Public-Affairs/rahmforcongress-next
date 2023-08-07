import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';

import type { TwoColumnBlockType } from '@/types/blocks';

import { colors } from '@/styles/styles';

import GridContainer from '@/components/layout/GridContainer';
import RichText from '@/components/RichText';
import AccentMediaBlock from '../Accent Media';

type Props = TwoColumnBlockType;

const TwoColumnBlock: React.FC<Props> = ({
  backgroundColor,
  twoColumn,
}) => {
  const renderColumns = twoColumn.map((block) => {
    switch (block.contentType) {
      case 'media':
        return (
          <div key={block.id}>
            <AccentMediaBlock
              displayBorder={block.displayBorder}
              backgroundColor={block.backgroundColor}
              accentStyle={block.accentStyle}
              accentSize={block.accentSize}
              accentMedia={block.accentMedia}
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
          <Cell>
            {renderColumns}
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default TwoColumnBlock;
