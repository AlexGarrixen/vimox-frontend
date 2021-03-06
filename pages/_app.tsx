import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProviderApp } from '@contexts/GlobalApp';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from '../theme/globalStyles';
import { theme } from '../theme';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'simplebar/dist/simplebar.min.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const isProd = process.env.NODE_ENV === 'production';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ProviderApp>
            <Component {...pageProps} />
          </ProviderApp>
          {!isProd && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
