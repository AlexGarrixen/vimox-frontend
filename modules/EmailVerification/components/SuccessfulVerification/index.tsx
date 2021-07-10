import React from 'react';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';

const SuccessfulVerification = () => (
  <div style={{ textAlign: 'center' }}>
    <img src='/verifiedBadge.png' />
    <Title level='3' colorScheme='white'>
      ¡Tu correo ha sido confirmado!
    </Title>
    <Spacing size={12} />
    <Text colorScheme='secondary'>
      Ahora puedes iniciar sesión con tu nueva cuenta
    </Text>
  </div>
);

export default SuccessfulVerification;
