import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';
import { AccessDeniedBox } from './styled';

export const AccessDenied = () => (
  <AccessDeniedBox>
    <img src='/accessDenied.png' />
    <Title level='3' colorScheme='danger'>
      Accesso Denegado
    </Title>
    <Spacing size={6} />
    <Text colorScheme='secondary'>
      No tienes permiso para acceder a este recurso
    </Text>
  </AccessDeniedBox>
);
