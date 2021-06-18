import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';

export const PasswordResetedSuccessfully = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <img src='/verifiedBadge.png' />
    <Title level='3' colorScheme='white'>
      ¡Tu contraseña ha sido restablecida!
    </Title>
    <Spacing size={12} />
    <Text colorScheme='secondary'>Ahora puedes iniciar sesión</Text>
  </div>
);
