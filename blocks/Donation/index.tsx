import React, { Fragment } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '../../components/layout/GridContainer';
import PolygonThree from '../../components/graphics/Polygons/PolygonThree';
import PolygonFour from '../../components/graphics/Polygons/PolygonFour';
import type { LinkType } from '@/types/fields';
import CMSLink from '../../components/Link';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';
import typeStyles from '../../styles/app.module.scss';
import type { DonationBlockType } from '@/types/blocks';

type Props = DonationBlockType;
const DonationBlock: React.FC<Props> = ({
  backgroundColor,
  cta,
  options,
}) => (
  <Fragment>
    <div
      className={classes.wrap}
      style={{ backgroundColor: colors[backgroundColor]}}
    >
      <GridContainer>
        <Grid>
          <Cell className={classes.cta}>
            <h1 className={typeStyles.h2} style={{ margin: 0 }}>
              {cta}
            </h1>
          </Cell>
        </Grid>
        <div className={classes.bg}>
          <PolygonThree
            fillColor={colors.purple}
            className={classes.polygon}
          />
        </div>
      </GridContainer>
    </div>
    <div>
      <GridContainer>
        <Grid>
          <Cell
            cols={12}
            colsM={8}
            className={classes.optionsWrapper}
          >
            {
              options.length > 0 && options.map((opt) => (
                <div
                  key={opt.id}
                  className={classes.donationOpt}
                >
                  <CMSLink
                    type={opt.link.type}
                    reference={opt.link.reference}
                    url={opt.link.url}
                    label={opt.link.label}
                    className={`${classes.donationLink} ${typeStyles.h4}`}
                  />
                  <PolygonFour
                    fillColor={colors.yellow}
                    className={classes.optPolygon}
                  />
                </div>
              ))
            }
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  </Fragment>
);

export default DonationBlock;
