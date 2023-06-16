import App from 'next/app';
import { Poppins } from 'next/font/google';
import { ModalContainer, ModalProvider } from '@faceless-ui/modal';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
import { GridProvider } from '@faceless-ui/css-grid';
import { Toaster } from 'react-hot-toast';
import { breakpoints, zIndex, baseStyling } from '@/styles/styles';
import type { FooterType, HeaderType, LegalType, SocialType } from '@/types/globals';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';
import classes from '../styles/app.module.scss';

type AppProps = {
  pageProps: any;
  Component: React.FC<{
    footer: FooterType;
    socialMedia: any;
    legal: any;
  }>;
} & {
  header: HeaderType;
  socialMedia: SocialType;
  footer: FooterType;
  legal: LegalType;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '700'],
});

function MyApp(appProps: AppProps): React.ReactElement {
  const {
    Component,
    pageProps,
    header,
    footer,
    socialMedia,
    legal,
  } = appProps;

  return (
    <ScrollInfoProvider>
      <WindowInfoProvider
        breakpoints={{
          xs: `(max-width: ${breakpoints.xs}px)`,
          s: `(max-width: ${breakpoints.s}px)`,
          m: `(max-width: ${breakpoints.m}px)`,
          l: `(max-width: ${breakpoints.l}px)`,
          xl: `(max-width: ${breakpoints.xl}px)`,
        }}
      >
        <ModalProvider
          zIndex={zIndex.modal}
          classPrefix="rModal"
          transTime={400}
        >
          <Toaster />
          <GridProvider
            rowGap={{
              s: baseStyling.base(2),
              m: baseStyling.base(2),
              l: baseStyling.base(2),
              xl: baseStyling.base(2),
            }}
            colGap={{
              s: baseStyling.base(2),
              m: baseStyling.base(2),
              l: baseStyling.base(2),
              xl: baseStyling.base(2),
            }}
            cols={{
              s: 8,
              m: 8,
              l: 12,
              xl: 12,
            }}
          >
            <div className={`${classes.app} ${poppins.className}`}>
              <Header header={header} social={socialMedia} />
              <Component
                {...pageProps}
                footer={footer}
                socialMedia={socialMedia}
                legal={legal}
              />
            </div>
          </GridProvider>
          <ModalContainer />
        </ModalProvider>
      </WindowInfoProvider>
    </ScrollInfoProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  const [header, footer, socialMedia, legal] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/header`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/social-media`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/legal`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    header,
    footer,
    socialMedia,
    legal,
  };
};

export default MyApp;
