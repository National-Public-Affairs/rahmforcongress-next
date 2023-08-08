import React, { useEffect, useState } from 'react';
import { Cell, Grid } from '@faceless-ui/css-grid';
import { useWindowInfo } from '@faceless-ui/window-info';

import type { AccentMediaBlockType } from '@/types/blocks';

import { breakpoints } from '@/styles/styles';

import Parallax from '@/components/Parallax';
import GridContainer from '@/components/layout/GridContainer';
import Media from '@/components/Media';

import { colors } from '@/styles/styles';
import classes from './styles.module.scss';

type Props = {
  className?: string;
} & AccentMediaBlockType;

const AccentMediaBlock: React.FC<Props> = ({
  displayBorder,
  backgroundColor,
  accentStyle,
  accentSize,
  accentMedia,
  className,
}) => {
  const windowInfo = useWindowInfo();
  const [currentWidth, updateWidth] = useState(0);
  useEffect(() => {
    updateWidth(windowInfo?.width ? windowInfo?.width : 0);
  }, [windowInfo]);
console.log('WINDOW WIDTH', currentWidth)
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

  return (
    <div
      className={`${classes.wrapper} ${accentSize ? classes[accentSize] : ''} ${className}`}
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
            <Parallax yDistance={currentWidth > breakpoints.s ? -100 : -20}>
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
