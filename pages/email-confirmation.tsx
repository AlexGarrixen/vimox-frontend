import React from 'react';
import { NextPageContext } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';

type EmailConfirmationProps = {
  querys: NextPageContext['query'];
};

const EmailConfirmation = ({ querys }: EmailConfirmationProps): JSX.Element => (
  <LayoutApp title='Vimox - email confirmation' verticallyCenterContent>
    <Spacing size={80} />
    <Container style={{ textAlign: 'center' }}>
      <img src='/emailOpen.png' />
      <Title level='3' colorScheme='white'>
        ¡Enlace de verificación enviado!
      </Title>
      <Spacing size={12} />
      <Text colorScheme='secondary'>
        Enviamos un enlace de confirmación por correo electrónico a
        <Text as='span' colorScheme='white'>
          {' '}
          {querys.email}
        </Text>
      </Text>
      <Spacing size={3} />
      <Text colorScheme='secondary'>
        Revise su correo electrónico para confirmar su cuenta.
      </Text>
    </Container>
    <Spacing size={30} />
  </LayoutApp>
);

EmailConfirmation.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default EmailConfirmation;
