import React from 'react';
import Footer from '../Footer';
import { FooterType, LegalType, SocialType } from '@/types/globals';
import classes from './styles.module.scss';

type Props = {
  footer: FooterType;
  legal?: LegalType;
  socialMedia?: SocialType;
  children: any;
}

const Template: React.FC<Props> = ({
  footer,
  socialMedia,
  legal,
  children,
}) => (
  <>
    <div className={classes.wrapper}>
      {children}
    </div>
    <Footer
      footer={footer}
      socialMedia={socialMedia}
      legal={legal}
    />
  </>
);

export default Template;
