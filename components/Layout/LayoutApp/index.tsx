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
};

export const LayoutApp = ({ children, title }: LayoutAppProps) => {
  const { isVisible, hideSeriesFinder } = useSeriesFinder();

  return (
    <LayoutAppStyled>
      <Head>
        {title && <title>{title}</title>}
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, user-scalable=no'
        />
      </Head>
      <Header />
      <ContentBox>{children}</ContentBox>
      <footer></footer>
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
