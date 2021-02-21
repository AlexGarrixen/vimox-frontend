import React from 'react';
import { LayoutAppStyled, ContentBox } from './styled';

type LayoutAppProps = {
  children?: React.ReactNode;
};

export const LayoutApp = ({ children }: LayoutAppProps) => (
  <LayoutAppStyled>
    <header></header>
    <ContentBox>{children}</ContentBox>
    <footer></footer>
  </LayoutAppStyled>
);
