import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Nprogress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ProviderApp } from '@contexts/GlobalApp';
import { AuthProvider } from '@contexts/Auth/client';
import { queryClient } from '@utils/queryClient';
import { ToastContainerStyled } from '@components/Feedback/ToastContainer';
import { GlobalStyle } from '../theme/globalStyles';
import { theme } from '../theme';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

const isProd = process.env.NODE_ENV === 'production';

Router.events.on(
  'routeChangeStart',
  (path) => path !== Router.asPath && Nprogress.start()
);
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <ProviderApp>
              <Component {...pageProps} />
              <ToastContainerStyled />
            </ProviderApp>
            {!isProd && <ReactQueryDevtools initialIsOpen={false} />}
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
