import React from 'react';
import { NextPageContext } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';

type EmailConfirmationProps = {
  querys: NextPageContext['query'];
};

const EmailConfirmation = ({ querys }: EmailConfirmationProps): JSX.Element => (
  <LayoutApp title='GxAnime - email confirmation' verticallyCenterContent>
    <Container style={{ textAlign: 'center' }}>
      <img src='/emailOpen.png' />
      <Typography as='h3' white>
        ¡Enlace de verificación enviado!
      </Typography>
      <Typography margin='12px 0 3px 0'>
        Enviamos un enlace de confirmación por correo electrónico a
        <Typography as='span' white>
          {' '}
          {querys.email}
        </Typography>
      </Typography>
      <Typography>
        Revise su correo electrónico para confirmar su cuenta.
      </Typography>
    </Container>
  </LayoutApp>
);

EmailConfirmation.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default EmailConfirmation;
