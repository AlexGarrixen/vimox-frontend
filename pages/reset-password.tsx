import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { FormReset } from '@pageSections/ResetPassword/FormReset';

const ResetPassword = (): JSX.Element => (
  <LayoutApp verticallyCenterContent>
    <Container maxWidth='sm'>
      <FormReset />
    </Container>
  </LayoutApp>
);

export default ResetPassword;
