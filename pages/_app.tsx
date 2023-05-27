import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ModalProvider } from '@faceless-ui/modal';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import { GridProvider } from '@faceless-ui/css-grid';
import { breakpoints, zIndex, baseStyling } from '@/styles/styles';
export default function App({ Component, pageProps }: AppProps) {
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
            <Component {...pageProps} />
          </div>
        </GridProvider>
      </ModalProvider>
    </WindowInfoProvider>
  );
}
