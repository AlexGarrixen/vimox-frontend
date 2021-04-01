import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProviderApp } from '@contexts/GlobalApp';
import { AuthProvider } from '@contexts/Auth/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainerStyled } from '@components/Feedback/ToastContainer';
import { GlobalStyle } from '../theme/globalStyles';
import { theme } from '../theme';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

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
