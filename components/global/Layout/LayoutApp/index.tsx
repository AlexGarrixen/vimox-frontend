import React from 'react';
import Head from 'next/head';
import { Header } from '../../Navigation/Header';
import { LayoutAppStyled, ContentBox } from './styled';
import { Dialog } from '../../Feedback/Dialog';
import { TabBottomNav } from '../../Navigation/TabBottomNav';
import { SeriesFinder } from '../../DataDisplay/SeriesFinder';
import { useSeriesFinder } from '@hooks/useSeriesFinder';

type LayoutAppProps = {
  children?: React.ReactNode;
  title?: string;
  verticallyCenterContent?: boolean;
};

export const LayoutApp = ({
  children,
  title,
  verticallyCenterContent,
}: LayoutAppProps) => {
  const { isVisible, hideSeriesFinder } = useSeriesFinder();

  return (
    <LayoutAppStyled>
      <Head>
        {title && <title>{title}</title>}
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </Head>
      <Header />
      <ContentBox verticallyCenterContent={verticallyCenterContent}>
        {children}
      </ContentBox>
      <footer />
      <TabBottomNav />
      <Dialog
        isOpen={isVisible}
        onRequestClose={hideSeriesFinder}
        maxWidth={768}
      >
        <SeriesFinder />
      </Dialog>
    </LayoutAppStyled>
  );
};
