import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';

const ForgotPasswordSuccess = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <img src='/emailOpen.png' />
    <Title level='3' colorScheme='white'>
      Revisa tu email
    </Title>
    <Spacing size={12} />
    <Text colorScheme='secondary'>
      Hemos enviado instrucciones de recuperación de contraseña a su correo
      electrónico
    </Text>
  </div>
);

export default ForgotPasswordSuccess;
