import App from 'next/app';
import { ModalContainer, ModalProvider } from '@faceless-ui/modal';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { GridProvider } from '@faceless-ui/css-grid';
import { breakpoints, zIndex, baseStyling } from '@/styles/styles';
import type { HeaderType, SocialType } from '@/types/globals';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';
import '../styles/app.scss';

type AppProps = {
  pageProps: unknown;
  Component: React.FC;
} & {
  header: HeaderType;
  socialMedia: SocialType;
}

function MyApp(appProps: AppProps): React.ReactElement {
  const {
    Component,
    pageProps,
    header,
    socialMedia,
  } = appProps;

  return (
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
          <div className="app">
            <Header header={header} social={socialMedia} />
            {/* <Component {...pageProps}/> */}
            <h1 className="h1">testing an h1</h1>
            <h2 className="h2">testing an h2</h2>
            <h3 className="h3">testing an h3</h3>
            <h4 className="h4">testing an h4</h4>
            <h5 className="h5">testing an h5</h5>
            <h6 className="h6">testing an h6</h6>
          </div>
        </GridProvider>
        <ModalContainer />
      </ModalProvider>
    </WindowInfoProvider>
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
  console.log('header data returned', header.navItems);
  console.log('social data returned', socialMedia);
  return {
    ...appProps,
    header,
    footer,
    socialMedia,
    legal,
  };
};

export default MyApp;
