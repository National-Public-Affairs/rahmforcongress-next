import React, { useEffect } from 'react';
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
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [children]);

  return (
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
};

export default Template;
