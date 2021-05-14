import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { RecoverForm } from '@pageSections/ForgotPassword/RecoverForm';

const ForgotPassword = (): JSX.Element => (
  <LayoutApp title='Olvidaste tu contraseña' verticallyCenterContent>
    <Container maxWidth='sm'>
      <RecoverForm />
    </Container>
  </LayoutApp>
);

export default ForgotPassword;
