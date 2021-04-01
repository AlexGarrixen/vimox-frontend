import React from 'react';
import { Typography } from '../../DataDisplay/Typography';
import styled from 'styled-components';

const AccessDeniedBox = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.danger};
`;

export const AccessDenied = (): JSX.Element => (
  <AccessDeniedBox>
    <img src='/accessDenied.png' />
    <Title as='h3' margin='0 0 6px 0'>
      Accesso Denegado
    </Title>
    <Typography>No tienes permiso para acceder a este recurso</Typography>
  </AccessDeniedBox>
);
