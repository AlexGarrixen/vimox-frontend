import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Form } from '@pageComponents/ResetPassword/Form';

const ResetPassword = (): JSX.Element => (
  <LayoutApp verticallyCenterContent>
    <Container maxWidth='sm'>
      <Form />
    </Container>
  </LayoutApp>
);

export default ResetPassword;
