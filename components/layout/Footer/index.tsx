/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import { Poppins } from 'next/font/google';
import { Grid, Cell } from '@faceless-ui/css-grid';
import type { FooterType, SocialType, LegalType } from '@/types/globals'; // import legal and footer data
import GridContainer from '../GridContainer';
import Arrow from '../../graphics/Arrow';
import CMSLink from '../../Link';
import PolygonFive from '../../graphics/Polygons/PolygonFive';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';
import typeStyles from '../../../styles/app.module.scss';

type Props = {
  footer: FooterType;
  socialMedia?: SocialType;
  legal?: LegalType;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
});

const Footer: React.FC<Props> = ({
  footer,
  socialMedia,
  legal,
}) => {
  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log('legal data:', legal);
  console.log('footer data:', footer);
  console.log('social media data:', socialMedia);

  return (
    <footer className={`${classes.footer} ${poppins.className}`}>
      <GridContainer>
        <Grid>
          <Cell
            cols={12}
            colsM={8}
          >
            {/* disclaimer */}
            {
              footer.displayCopyright === 'yes' && (
                <div className={classes.disclaimerWrapper}>
                  <div className={classes.disclaimer}>
                    {legal?.disclaimer}
                  </div>
                </div>
              )
            }
            {/* org address */}
            {
              footer.displayAddress === 'yes' && (
                <div className={classes.addressWrapper}>
                  <p className={classes.address}>
                    {legal?.address}
                  </p>
                </div>
              )
            }
          </Cell>
          {/* nav options */}
          {
            (Array.isArray(footer?.navItems) && footer.navItems.length > 0) && (
              <Cell
                cols={12}
                colsM={8}
                className={classes.nav}
              >
                {
                  footer.navItems.map((item) => (
                    <div className={classes.navLinkWrapper} key={item.id}>
                      <CMSLink
                        type={item.link.type}
                        reference={item.link.reference}
                        label={item.link.label}
                        newTab={item.link.newTab}
                        url={item.link.url}
                        className={`${classes.navOption} ${typeStyles.h5}`}
                      />
                      <PolygonFive
                        fillColor={colors.darkPurple}
                        className={classes.optPolygon}
                      />
                    </div>
                  ))
                }
                {/* {
                  footer.navItems.map(({ link }) => {
                    if (link.type === 'custom') {
                      return (
                        <CMSLink
                          key={link.label}
                          type="custom"
                          url={link.url}
                          label="footerNavOption"
                          className={classes.navLink}
                        >
                          <h4
                            className={classes.navOption}
                            onClick={backToTop}
                          >
                            {link.label}
                          </h4>
                          <PolygonFive
                            fillColor={colors.darkPurple}
                            className={classes.optPolygon}
                          />
                        </CMSLink>
                      );
                    }

                    return (
                      <CMSLink
                        key={link.label}
                        type="page"
                        page={link.page}
                        url={link.url}
                        label="footerNavOption"
                        className={classes.navLink}
                      >
                        <h4
                          onClick={backToTop}
                          className={classes.navOption}
                        >
                          {link.label}
                        </h4>
                        <PolygonFive
                          fillColor={colors.darkPurple}
                          className={classes.optPolygon}
                        />
                      </CMSLink>
                    );
                  })
                } */}
              </Cell>
            )
          }
          {/* copyright */}
          {
            footer.displayCopyright === 'yes' && (
              <Cell
                cols={12}
                colsM={8}
              >
                <div className={classes.copyrightWrapper}>
                  <p className={classes.copyright}>
                    &copy;
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    {legal?.copyright}
                  </p>
                </div>
              </Cell>
            )
          }
        </Grid>
      </GridContainer>
      <button
        type="button"
        onClick={backToTop}
        className={classes.backToTop}
      >
        <Arrow
          className={classes.backToTopArrow}
          color="white"
        />
      </button>
    </footer>
  );
};

export default Footer;
