import React, { Fragment } from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import GridContainer from '../../components/layout/GridContainer';
import PolygonThree from '../../components/graphics/Polygons/PolygonThree';
import PolygonFour from '../../components/graphics/Polygons/PolygonFour';
import CMSLink from '../../components/Link';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';
import typeStyles from '../../styles/app.module.scss';
import type { DonationBlockType } from '@/types/blocks';

type ElementType = 'mainPoly' | 'mainText' | 'optPoly' | 'optText';

type Props = DonationBlockType;
const DonationBlock: React.FC<Props> = ({
  backgroundColor,
  cta,
  options,
}) => {
  const pickColor = (elementType: ElementType) => {
    switch (elementType) {
      case 'mainPoly':
        if (backgroundColor === 'darkPurple' || backgroundColor === 'purple' || backgroundColor === 'none') return colors.yellow;
        if (backgroundColor === 'yellow' || backgroundColor === 'white') return colors.purple;
      case 'mainText':
        if (backgroundColor === 'purple') return colors.darkPurple;
        if (backgroundColor === 'yellow' || backgroundColor === 'darkPurple' || backgroundColor === 'none') return colors.white;
        if (backgroundColor === 'white') return colors.yellow;
      case 'optPoly':
        if (backgroundColor === 'darkPurple' || backgroundColor === 'none') return colors.purple;
        if (backgroundColor === 'yellow' || backgroundColor === 'purple') return colors.darkPurple;
        if (backgroundColor === 'white') return colors.yellow;
      case 'optText':
        if (backgroundColor === 'yellow' || backgroundColor === 'purple' || backgroundColor === 'darkPurple' || backgroundColor === 'none') return colors.white;
        if (backgroundColor === 'white') return colors.darkPurple;
      default:
        break;
    }
  }

  return (
    <Fragment>
      <div
        className={classes.wrapper}
        style={{ backgroundColor: backgroundColor ? colors[backgroundColor] : 'transparent' }}
      >
        <GridContainer>
          <Grid>
            <Cell className={classes.cta}>
              <h1
                className={typeStyles.h2}
                style={{
                  margin: 0,
                  color: pickColor('mainText'),
                }}
              >
                {cta}
              </h1>
            </Cell>
          </Grid>
          <div className={classes.bg}>
            <PolygonThree
              fillColor={pickColor('mainPoly')}
              className={classes.polygon}
            />
          </div>
        </GridContainer>
      </div>

      <div>
        <GridContainer className={classes.gridContainer}>
          <Grid>
            <Cell
              cols={12}
              start={1}
              colsM={8}
              className={classes.optionsWrapper}
              style={{
                backgroundColor: backgroundColor ? colors[backgroundColor] : 'transparent',
              }}
            >
              {
                options && options.length > 0 && options.map((opt) => (
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
                      textColor={pickColor('optText')}
                    />
                    <PolygonFour
                      fillColor={pickColor('optPoly')}
                      className={classes.optPolygon}
                    />
                  </div>
                ))
              }
            </Cell>
          </Grid>
          <div
            className={classes.bg}
            style={{
              backgroundColor: backgroundColor ? colors[backgroundColor] : 'transparent',
              translate: '0 -10px',
            }}
          />
        </GridContainer>
      </div>
    </Fragment>
  )
}

export default DonationBlock;
