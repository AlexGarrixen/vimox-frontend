import React from 'react';
import { Container } from '@components/Layout/Container';
import { Button } from '@components/Form/Button';
import styled from 'styled-components';

const ButtonsBox = styled.div`
  margin-top: 24px;
`;

export const NavButtons = () => (
  <ButtonsBox>
    <Container>
      <Button margin='0 12px 0 0'>Anterior</Button>
      <Button primary>Siguiente</Button>
    </Container>
  </ButtonsBox>
);
