import React from 'react';
import { Header } from '../../Navigation/Header';
import { LayoutAppStyled, ContentBox } from './styled';

type LayoutAppProps = {
  children?: React.ReactNode;
};

export const LayoutApp = ({ children }: LayoutAppProps) => (
  <LayoutAppStyled>
    <Header />
    <ContentBox>{children}</ContentBox>
    <footer></footer>
  </LayoutAppStyled>
);
