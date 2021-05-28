import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { RecoverForm } from '@pageSections/ForgotPassword/RecoverForm';

const ForgotPassword = (): JSX.Element => (
  <LayoutApp title='Olvidaste tu contraseña' verticallyCenterContent>
    <Container maxWidth='sm'>
      <Spacing size={{ xs: 80, md: 0 }} />
      <RecoverForm />
      <Spacing size={{ xs: 30, md: 0 }} />
    </Container>
  </LayoutApp>
);

export default ForgotPassword;
