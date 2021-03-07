import React from 'react';
import { Header } from '../../Navigation/Header';
import { LayoutAppStyled, ContentBox } from './styled';
import { Dialog } from '../../Feedback/Dialog';
import { SeriesFinder } from '../../DataDisplay/SeriesFinder';
import { useSeriesFinder } from '@hooks/useSeriesFinder';

type LayoutAppProps = {
  children?: React.ReactNode;
};

export const LayoutApp = ({ children }: LayoutAppProps) => {
  const { isVisible, hideSeriesFinder } = useSeriesFinder();

  return (
    <LayoutAppStyled>
      <Header />
      <ContentBox>{children}</ContentBox>
      <footer></footer>
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
