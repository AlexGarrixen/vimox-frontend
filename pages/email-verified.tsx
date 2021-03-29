import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';

const EmailVerified = (): JSX.Element => (
  <LayoutApp title='GxAnime - email confirmation' verticallyCenterContent>
    <Container style={{ textAlign: 'center' }}>
      <img src='/verifiedBadge.png' />
      <Typography as='h3' white>
        ¡Tu correo ha sido confirmado!
      </Typography>
      <Typography margin='12px 0 0 0'>
        Ahora puedes iniciar sesión con tu nueva cuenta
      </Typography>
    </Container>
  </LayoutApp>
);

export default EmailVerified;
