import React, { FC } from 'react';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Wrapper } from './styled';

const ForgotPasswordLayout: FC = ({ children }) => (
  <Wrapper>
    <Spacing size={80} />
    <Container>{children}</Container>
    <Spacing size={80} />
  </Wrapper>
);

export default ForgotPasswordLayout;
