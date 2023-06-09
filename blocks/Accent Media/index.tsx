import React from 'react';
import { AccentMediaBlockType } from '@/types/blocks';
import Parallax from '@/components/Parallax';
import GridContainer from '@/components/layout/GridContainer';
import { Cell, Grid } from '@faceless-ui/css-grid';
import Media from '@/components/Media';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';

type Props = AccentMediaBlockType;

const AccentMediaBlock: React.FC<Props> = ({
  displayBorder,
  backgroundColor,
  accentStyle,
  accentSize,
  accentMedia,
}) => {
  let cells = {
    xl: { cols: 12, start: 1 },
    l: { cols: 10, start: 3 },
    m: { cols: 8, start: 1 },
    s: { cols: 8, start: 1 },
  };

  if (accentSize === 'small') {
    cells.xl = { cols: 2, start: 7 };
    cells.l = { cols: 2, start: 8 };
    cells.m = { cols: 2, start: 5 };
    cells.s = { cols: 3, start: 4 };
  }
  if (accentSize === 'medium') {
    cells.xl = { cols: 4, start: 6 };
    cells.l = { cols: 5, start: 5 };
    cells.m = { cols: 3, start: 4 };
    cells.s = { cols: 5, start: 2 };
  }
console.log('DISPLAY BORDER?', displayBorder)
console.log('accent style', accentStyle)
  return (
    <div
      className={`${classes.wrapper} ${accentSize ? classes[accentSize] : ''}`}
      style={{ backgroundColor: colors[backgroundColor] }}
    >
      <GridContainer className={classes.grid}>
        <Grid>
          <Cell
            cols={cells.xl.cols}
            start={cells.xl.start}
            colsL={cells.l.cols}
            startL={cells.l.start}
            colsM={cells.m.cols}
            startM={cells.m.start}
            colsS={cells.s.cols}
            startS={cells.s.start}
          >
            <Parallax yDistance={100}>
              <Media
                mimeType={accentMedia?.mimeType ? accentMedia?.mimeType : 'image/png'}
                alt={accentMedia?.alt}
                url={accentMedia?.url ? accentMedia?.url : ''}
                clipMask={displayBorder && accentStyle ? accentStyle : undefined}
                className={`${classes.media} ${accentSize ? classes[accentSize] : ''}`}
              />
            </Parallax>
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default AccentMediaBlock;
