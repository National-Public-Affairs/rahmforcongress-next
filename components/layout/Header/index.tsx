/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import NextLink from 'next/link';
import { Modal, useModal } from '@faceless-ui/modal';
import { Cell, Grid } from '@faceless-ui/css-grid';
import type { Props } from './types';
import GridContainer from '../GridContainer';
import Logo from '@/components/graphics/Logo';
import Hamburger from './Hamburger';
import CMSLink from '@/components/Link';
import classes from './style.module.scss';

const menuSlug = 'menu';

const Header: React.FC<Props> = ({ header, social }) => {
  const { isModalOpen, toggleModal } = useModal();
  const menuActive = isModalOpen('menu');

  if (header.globalType !== 'header') {
    return 'Requested data not found'
  }

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <NextLink
          href="/"
          className={classes.logo}
        >
          <Logo className={classes.logo} />
        </NextLink>

        <div className={classes.navOptions}>
          {
            header?.navItems.map((navItem) => (
              <CMSLink
                key={navItem.id}
                type={navItem.link.type}
                reference={navItem.link?.reference}
                className={classes.navOption}
              >
                <h5>
                  {navItem.label}
                </h5>
              </CMSLink>
            ))
          }
        </div>

        <button
          type="button"
          className={`${classes.menuButton} ${menuActive ? classes.active : ''}`}
          onClick={() => toggleModal(menuSlug)}
        >
          <Hamburger active={menuActive} />
        </button>
      </div>

      <Modal
        slug={menuSlug}
        className={classes.menu}
      >
        <GridContainer>
          <Grid className={classes.navLinks}>
            <Cell
              cols={8}
              htmlElement="nav"
            >
              {
                header?.navItems.map((navItem, idx) => (
                  <CMSLink
                    key={navItem.id}
                    type={navItem.link.type}
                    reference={navItem.link?.reference}
                    className={classes.primaryNavItem}
                  >
                    <h3
                      style={{ marginTop: idx === 0 ? 0 : undefined }}
                      onClick={() => toggleModal(menuSlug)}
                    >
                      {navItem.label}
                    </h3>
                  </CMSLink>
                ))
              }
            </Cell>
            <Cell cols={3}>
              {
                social.globalType === 'social-media' && social.links?.map((socialItem) => (
                  <div key={socialItem.id}>
                    <a
                      href={socialItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.secondaryNavItem}
                    >
                      {socialItem.label}
                    </a>
                  </div>
                ))
              }
            </Cell>
          </Grid>
        </GridContainer>
      </Modal>
    </header>
  );
};

export default Header;
