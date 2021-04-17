import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Form } from '@pageComponents/ForgotPassword/Form';

const ForgotPassword = (): JSX.Element => (
  <LayoutApp title='Olvidaste tu contraseña' verticallyCenterContent>
    <Container maxWidth='sm'>
      <Form />
    </Container>
  </LayoutApp>
);

export default ForgotPassword;
